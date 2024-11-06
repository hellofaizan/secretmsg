// More robust version
import { LRUCache } from "lru-cache";

declare global {
  var UserCache: LRUCache<string, any> | undefined;
}

if (!global.UserCache) {
  global.UserCache = new LRUCache<string, any>({
    max: 100,
    ttl: 1800000,
  });
}

export const UserCache = global.UserCache;

export const clearUserCache = (id: string) => {
  return UserCache.delete(id);
};
