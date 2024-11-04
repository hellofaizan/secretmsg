"use server";

import { db } from "@/server/db";

export default async function SendMessage({
  message,
  userId,
}: {
  message: string;
  userId: string;
}) {
  if (!message) {
    return { error: "Message must not be empty." };
  }

  if (!userId) {
    return { error: "UserId is required." };
  }

  const user = await db.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return { error: "Invalid UserId" };
  }

  await db.message.create({
    data: {
      userId: userId,
      content: message,
    },
  });

  return { success: "Message sent successfully!" };
}
