"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";

export default async function UnlinkAccount({ data }: { data: any }) {
  const session = await auth();
  if (!session) {
    return { error: "Access denied" };
  }

  if (!data.id) {
    return { error: "Enter a valid account id" };
  }

  try {
    await db.account.deleteMany({
      where: {
        userId: session.user.id,
        id: data.id,
      },
    });

    return { success: "Account has been unlinked successfully!" };
  } catch (error) {
    return { error: "Failed to unlink account" };
  }
}
