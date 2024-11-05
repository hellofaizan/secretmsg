"use client";

import React from "react";
import { Loader, Trash2, TriangleAlert } from "lucide-react";
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
import { DeleteMessage } from "@/actions/deletemessage";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DeleteDialog({ id }: { id: number }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const deleteMessage = async () => {
    setLoading(true);

    await DeleteMessage(id)
      .then((res) => {
        if (res.error) {
          toast(res.error);
        } else {
          toast("Message deleted successfully");
        }
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
        router.refresh();
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-1 rounded-md p-1 text-sm hover:bg-muted"
          title="Remove this message"
        >
          <Trash2 size={18} className="text-red-500" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Message</DialogTitle>
          <DialogDescription>
            Are you sure, you want to delete this message
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
              deleteMessage();
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
