// get username from form
"use server";

import { currentUser } from "@/server/user";
import { db } from "@/server/db";

export default async function UpdateTelegram(username: any) {
  const userid = await currentUser();
  const id = userid?.id;

  if (!id) {
    return { error: "You must be logged in to set your username." };
  }

  if (username.includes(" ")) {
    return { error: "Chat ID cannot contain spaces." };
  }

  const userId = Number(username);

  // update username
  await db.user.update({
    where: { id: id },
    data: {
      telegram: userId,
    },
  });

  return { success: "Telegram Chat ID updated successfully!" };
}
