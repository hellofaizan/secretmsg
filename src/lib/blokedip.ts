import NodeCache from "node-cache";

export const ipBlacklistCache = new NodeCache({ stdTTL: 28800 }); // 28800 seconds = 8 hours

export function isIPBlacklisted(ip: any) {
  return ipBlacklistCache.has(ip);
}

export function blacklistIP(ip: any) {
  ipBlacklistCache.set(ip, true);
}
