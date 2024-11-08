"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function PageLink({ session }: { session: any }) {
  const siteUrl = process.env.NEXT_PUBLIC_Website_URL || "https://pouzz.xyz";
  const user = session.user;
  const router = useRouter();
  return (
    <div className="mt-3 w-full md:w-[60%] lg:w-[45%]">
      {user?.username ? (
        <div
          className="flex items-center justify-between rounded border-s-4 border-green-500 bg-green-50 p-2"
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
            className="gap-2 bg-green-50/50 hover:bg-green-500/20"
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
      ) : (
        <div
          role="alert"
          className="flex items-center justify-between rounded border-s-4 border-red-500 bg-red-50 p-2"
        >
          <p className="text-sm text-red-700">
            ⚠️ Your page is inactive, set a unique Username
          </p>

          <Button
            variant="destructive"
            className="gap-2"
            onClick={() => {
              router.push("/dashboard/profile#username");
            }}
          >
            Choose
          </Button>
        </div>
      )}
    </div>
  );
}
