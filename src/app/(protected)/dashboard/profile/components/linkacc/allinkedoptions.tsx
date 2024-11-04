"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import UnlinkAccount from "@/actions/unlinkaccount";

export default function AlreadyLinkedOptions(accounts: any) {
  const linkedAccounts = accounts.account;
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const socialName = (provider: string) => {
    return provider.charAt(0).toUpperCase() + provider.slice(1);
  };

  const socialIcon = (provider: string) => {
    switch (provider) {
      case "google":
        return "/logos/google.svg";
      case "twitter":
        return "/logos/twitter.svg";
      case "apple":
        return "/logos/apple.svg";
      default:
        return "/logos/google.svg";
    }
  };

  const unlink = (id: string, provider: string) => async () => {
    setLoading(true);
    toast(
      "Unlinking " +
        provider.charAt(0).toUpperCase() +
        provider.slice(1) +
        "...",
    );

    if (linkedAccounts.length <= 1) {
      toast.error("You can't UNLINK all of the available login options");
      setLoading(false);
    } else {
      await UnlinkAccount({ data: { id } }).then((res) => {
        try {
          if (res.error) {
            throw new Error(res.error);
          }
          toast(res.success);
        } catch (error) {
          toast("Failed to unlink account");
        } finally {
          setLoading(false);
          router.refresh();
        }
      });
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {linkedAccounts?.map((account: any) => (
        <div
          key={account.id}
          className="my-2 flex items-center justify-between gap-2 px-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={socialIcon(account.provider)}
              alt={account.provider}
              className="h-6 w-6"
            />
            <div className="flex items-baseline gap-2">
              <p className="text-lg font-semibold">
                {socialName(account.provider)}
              </p>
              <p className="text-xs text-muted-foreground">
                Linked on{" "}
                {new Date(account.createdAt).toLocaleString("en-UK", {
                  month: "2-digit",
                  day: "numeric",
                  year: "2-digit",
                })}
              </p>
            </div>
          </div>

          <Button
            className="flex items-center gap-1 border border-destructive"
            variant={"destructive"}
            onClick={unlink(account.id, account.provider)}
            disabled={loading}
          >
            {loading && <Loader className="h-4 w-4 animate-spin" />}
            UNLINK
          </Button>
        </div>
      ))}
    </div>
  );
}
