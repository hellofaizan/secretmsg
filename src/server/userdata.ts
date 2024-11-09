import { db } from "./db";
import { getUserById } from "./user";

export const userData = async (id: string) => {
  const user = await getUserById(id as string);

  return user;
};

export const adminData = async () => {
  try {
    const user = await db.user.findMany({
      select: {
        name: true,
        image: true,
        email: true,
        username: true,
        joinedAt: true,
      },
      orderBy: {
        joinedAt: "desc",
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getAllProfiles = async () => {
  const users = await db.user.findMany({
    where: {
      username: {
        not: null,
      },
    },
  });

  return users;
};
