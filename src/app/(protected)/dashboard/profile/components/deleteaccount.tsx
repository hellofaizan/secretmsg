import React, { Suspense } from "react";
import { Loader } from "lucide-react";
import { DeleteDialog } from "./deletedialog";

export default async function DeleteAccount(user: any) {
  const userId = user.user.id;
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-destructive">
      <div className="flex flex-col gap-1 bg-muted/50 px-4 py-4">
        <p className="text-xl font-semibold">Delete Account</p>
        <p className="text-sm text-muted-foreground">
          Permanently delete your account, all of your data will be lost.
        </p>
      </div>
      <div className="flex items-center justify-between bg-destructive/15 p-2 px-5">
        <p className="text-sm text-muted-foreground">
          This action is irreversible, please be sure before proceeding.
        </p>

        <Suspense fallback={<Loader className="h-5 w-5 animate-spin" />}>
          <DeleteDialog userId={userId ?? ""} />
        </Suspense>
      </div>
    </div>
  );
}
