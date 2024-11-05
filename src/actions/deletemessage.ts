"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { getUserById } from "@/server/user";

export const DeleteMessage = async (id: number) => {
  const session = await auth();
  const user = await getUserById(session?.user.id || "");
  if (!user) return { error: "Session expired, Login again!" };

  await db.message.delete({ where: { id } });

  return { success: "Message deleted successfully!" };
};
