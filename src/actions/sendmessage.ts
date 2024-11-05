"use server";

import { db } from "@/server/db";
import { rateLimit } from "@/lib/rateLimit";

export default async function SendMessage({
  message,
  userId,
  ip,
}: {
  message: string;
  userId: string;
  ip: string;
}) {
  if (!message) {
    return { error: "Message must not be empty." };
  }

  const filteredWords = [
    "fuck",
    "fcuk",
    "porn",
    "xxx",
    "behnch0d",
    "benhchod",
    "fucker",
    "bitch",
    "land",
    "zinhuk",
  ];
  const messageLowercase = message.toLowerCase();
  const containsFilteredWord = filteredWords.some((word) =>
    messageLowercase.includes(word),
  );

  if (containsFilteredWord) {
    return { error: "Man, don't be this toxic towards people" };
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

  const isRateLimited = rateLimit(ip);

  if (isRateLimited) {
    return { error: "Slow down man, You are spamming!" };
  }

  await db.message.create({
    data: {
      userId: userId,
      content: message,
    },
  });

  return { success: "Message sent successfully!" };
}
