"use client";

import React from "react";
import { Loader, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteAccAction } from "@/actions/deleteaccount";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export function DeleteDialog({ userId }: { userId: string }) {
  const [loading, setLoading] = React.useState(false);
  const deleteAccount = async () => {
    setLoading(true);

    await DeleteAccAction(userId as string)
      .then((res) => {
        if (res.error) {
          toast(res.error);
        } else {
          toast("Account deleted successfully");
          signOut();
        }
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Permanently delete your account, all of your data will be lost.
          </DialogDescription>
          <div
            className="flex items-center rounded-md bg-red-50/50 p-3 text-sm font-semibold text-red-500"
            role="alert"
          >
            <p>
              <TriangleAlert size={14} className="mr-1 inline-block" />
              <span className="font-bold">Warning!</span> This action is
              irreversible, please be certain.
            </p>
          </div>
        </DialogHeader>
        <div className="mt-2 flex flex-col gap-1">
          <p className="text-sm text-foreground">
            To verify, type <span className="font-bold">delete my account</span>{" "}
            below:
          </p>
          <input
            id="verification"
            autoFocus
            className="rounded-md border p-1 px-2 focus:border-foreground focus:outline-none"
            type="text"
          />
        </div>
        <DialogFooter className="flex w-full items-center sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="destructive"
            className="flex items-center gap-1"
            disabled={loading}
            onClick={async () => {
              try {
                const verification = document.getElementById(
                  "verification",
                ) as HTMLInputElement;
                if (verification.value === "delete my account") {
                  // delete account
                  deleteAccount();
                } else if (verification.value === "delete my account ") {
                  verification.setCustomValidity(
                    "There is an extra space at the end",
                  );
                  verification.reportValidity();
                } else if (verification.value === " delete my account") {
                  verification.setCustomValidity(
                    "There is an extra space at the start",
                  );
                  verification.reportValidity();
                } else {
                  verification.setCustomValidity(
                    "Please type 'delete my account'",
                  );
                  verification.reportValidity();
                }
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {loading && <Loader className="h-5 w-5 animate-spin" />}
            {loading ? "Deleting..." : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
