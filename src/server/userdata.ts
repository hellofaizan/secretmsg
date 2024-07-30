import { getUserById } from "./user";

export const userData = async (id: string) => {
  const user = await getUserById(id as string);

  return user;
};