"use server";

import { clearUserCache } from "@/lib/usercache";
import { db } from "@/server/db";
import { currentUser } from "@/server/user";

export default async function UpdateProfile(data: any) {
  const userid = await currentUser();
  const id = userid?.id;
  const name = data?.name;
  const bio = data?.bio;

  if (!id) {
    return { error: "You must be logged in to update your profile" };
  }

  // update name
  await db.user.update({
    where: { id: id },
    data: {
      name: name,
      about: bio,
    },
  });
  clearUserCache(id)

  return { success: "Profile updated successfully!" };
}
