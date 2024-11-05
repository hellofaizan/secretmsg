"use server";

import { db } from "@/server/db";
import { rateLimit } from "@/lib/rateLimit";
import { isIPBlacklisted, ipBlacklistCache, blacklistIP } from "@/lib/blokedip";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 600 });
const maxAttempts = 6;

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

  // - First it checks if you are blocked
  // - Then if checks if you did wrong api call 6 times,
  // - Then step 2 true; it will block you for 12 hours
  // - Then it filteres out the bad words
  // - Then it checks if you have sent same message the last time
  // - If true, then add an attempt
  // - Then it checks ratelimit
  // - Then it looks for user
  // - If all above true, then it deletes all fakeattempts from cache

  if (isIPBlacklisted(ip)) {
    return {
      error: "Your IP has been temporarily blocked due to suspicious activity.",
    };
  }

  // Track the number of failed attempts for this IP
  let attemptCount = ipBlacklistCache.get(`${ip}-attempts`) || 0;

  // If the attempt count exceeds maxAttempts, blacklist the IP
  if (typeof attemptCount === "number" && attemptCount >= maxAttempts) {
    blacklistIP(ip); // Add IP to the blacklist cache
    return {
      error:
        "You have been temporarily blocked due to suspicious activity. It will be resume after 8 hours",
    };
  }

  // Filterout bad words
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

  // filter out recent msg
  const recentMessage = cache.get(ip);
  if (recentMessage && recentMessage === message) {
    ipBlacklistCache.set(`${ip}-attempts`, (attemptCount as number) + 1);
    console.log(attemptCount);
    return { error: "Duplicate message detected. You just sent same message" };
  }
  cache.set(ip, message);

  if (!userId) {
    return { error: "UserId is required." };
  }

  // rate limit
  const isRateLimited = rateLimit(ip);
  if (isRateLimited) {
    ipBlacklistCache.set(`${ip}-attempts`, (attemptCount as number) + 1);
    return {
      error:
        "Slow down man, You are spamming! You can just send 10 messages in an hour",
    };
  }

  const user = await db.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return { error: "Invalid UserId" };
  }

  ipBlacklistCache.del(`${ip}-attempts`);

  await db.message.create({
    data: {
      userId: userId,
      content: message,
    },
  });

  return { success: "Message sent successfully!" };
}
