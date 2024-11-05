"use server";

import { db } from "@/server/db";
import { rateLimit } from "@/lib/rateLimit";
import NodeCache from "node-cache";
const cache = new NodeCache({ stdTTL: 600 });

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

  // Filterout bad words
  if (containsFilteredWord) {
    return { error: "Man, don't be this toxic towards people" };
  }

  // filter out recent msg
  const recentMessage = cache.get(ip);
  if (recentMessage && recentMessage === message) {
    return { error: "Duplicate message detected. You just sent same message" };
  }
  cache.set(ip, message);

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
    return {
      error:
        "Slow down man, You are spamming! You can just send 10 messages in an hour",
    };
  }

  await db.message.create({
    data: {
      userId: userId,
      content: message,
    },
  });

  return { success: "Message sent successfully!" };
}
