"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function PageLink({ session }: { session: any }) {
  const siteUrl = process.env.NEXT_PUBLIC_Website_URL || "https://pouzz.xyz";
  const user = session.user;
  return (
    <div className="w-full md:w-[60%] lg:w-[45%] mt-3">
      {user?.username ? (
        <div
          className="flex items-center justify-between rounded-lg bg-green-100/50 p-3 text-sm text-green-600"
          role="alert"
        >
          <div>
            🎉 Your Pouzz page is live:{" "}
            <Link href={`${siteUrl}/${user?.username}`} target="_blank">
              <span className="underline">
                {siteUrl}/{user.username}
              </span>
            </Link>
          </div>
          <Button
            variant="outline"
            className="gap-2 hover:bg-green-500/20 bg-green-50/50"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://pouzz.xyz/${user.username}`,
              );
              toast("📋 Link copied to clipboard");
            }}
          >
            <CopyIcon size={14} />
            Copy
          </Button>
        </div>
      ) : null}
    </div>
  );
}
