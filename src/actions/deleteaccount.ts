"use server";

import { clearUserCache } from "@/lib/usercache";
import { db } from "@/server/db";
import { getUserById } from "@/server/user";
import DeleteWebhook from "./deletewebhook";

export const DeleteAccAction = async (id: string) => {
  const user = await getUserById(id);
  if (!user) return { error: "Session expired, Login again!" };

  await db.user.delete({ where: { id: user.id } });

  clearUserCache(user.id);
  DeleteWebhook({ user });

  return { success: "Account deleted successfully!" };
};
