"use server";

import { db } from "@/server/db";
import { getUserById } from "@/server/user";

export const DeleteAccAction = async (id: string) => {
  const user = await getUserById(id);
  if (!user) return { error: "Session expired, Login again!" };

  await db.user.delete({ where: { id: user.id } });

  return { success: "Account deleted successfully!" };
};
