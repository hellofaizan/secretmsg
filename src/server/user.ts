import { db } from "./db";
import { auth } from "./auth";
import { UserCache } from '@/lib/usercache';

export const getUserById = async (id: string) => {
  try {
    const cachedUser = UserCache.get(id);
    if (cachedUser) {
      return cachedUser; // Return cached user data
    }

    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (user) {
      UserCache.set(id, user);
    }
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getMessages = async (id: string) => {
  try {
    const messages = await db.message.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        timestamp: "desc",
      },
    });
    return messages;
  } catch (error) {
    return null;
  }
};

export const linkedAccounts = async (id: string) => {
  try {
    const accounts = await db.account.findMany({
      where: {
        userId: id,
      },
    });
    return accounts;
  } catch (error) {
    return null;
  }
};

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};

export const currentUsername = async () => {
  const session = await auth();

  return session?.user?.username;
};
