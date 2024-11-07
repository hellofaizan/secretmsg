// get username from form
"use server";

import { currentUser } from "@/server/user";
import { db } from "@/server/db";
import { clearUserCache } from "@/lib/usercache";

export default async function UpdateUsername(username: any) {
  const userid = await currentUser();
  const id = userid?.id;

  if (!id) {
    return { error: "You must be logged in to set your username." };
  }

  if (!username) {
    return { error: "Username must not be empty." };
  }

  if (username.includes(" ")) {
    return { error: "Username cannot contain spaces." };
  }

  const user = await db.user.findFirst({
    where: { id: id },
  });

  if (user?.usernameUpdatedAt) {
    const updatedAt = user.usernameUpdatedAt;
    const now = new Date();
    const diff = Math.abs(now.getTime() - updatedAt.getTime());
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (diffDays < 7) {
      return {
        error:
          "You can update username only once a week. You can now change again after " +
          (7 - diffDays) +
          " days.",
      };
    }
  }

  if (username === userid?.username) {
    return { error: "Username is the same." };
  }

  // check if username is already taken
  const existingUser = await db.user.findFirst({
    where: { username: username },
  });

  if (existingUser) {
    return { error: "Username has been already taken." };
  }

  // update username
  await db.user.update({
    where: { id: id },
    data: {
      username: username,
      usernameUpdatedAt: new Date(),
    },
  });

  clearUserCache(id)

  return { success: "Username updated successfully!" };
}
