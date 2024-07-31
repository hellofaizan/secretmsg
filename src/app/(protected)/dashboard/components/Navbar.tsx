"use client";

import React from "react";
import { HomeIcon, Info, MessageSquare, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar({ session }: { session: any }) {
  const path = usePathname();
  return (
    <div className="flex w-full items-center justify-between border-b pb-3 md:w-[60%] lg:w-[45%]">
      <Link
        href="/dashboard"
        className={cn(
          "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground gap-1",
          path === "/dashboard" && "bg-muted",
        )}
        prefetch={false}
      >
        <HomeIcon
          size={25}
          className={cn(
            path === "/dashboard" ? "text-foreground" : "text-gray-500",
          )}
        />
        <span className="text-lg">{path === "/dashboard" ? "Home" : ""}</span>
      </Link>

      <Link
        href="/dashboard/inbox"
        className={cn(
          "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground gap-1",
          path === "/dashboard/inbox" && "bg-muted",
        )}
        prefetch={false}
      >
        <MessageSquare
          size={25}
          className={cn(
            path === "/dashboard/inbox" ? "text-foreground" : "text-gray-500",
          )}
        />
        <span className="text-lg">
          {path === "/dashboard/inbox" ? "Inbox" : ""}
        </span>
      </Link>

      <Link
        href="/dashboard/feedback"
        className={cn(
          "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground gap-1",
          path === "/dashboard/feedback" && "bg-muted",
        )}
        prefetch={false}
      >
        <Info
          size={25}
          className={cn(
            path === "/dashboard/feedback"
              ? "text-foreground"
              : "text-gray-500",
          )}
        />
        <span className="text-lg">
          {path === "/dashboard/feedback" ? "Feedback" : ""}
        </span>
      </Link>

      <Link
        href="/dashboard/profile"
        className={cn(
          "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground gap-1",
          path === "/dashboard/profile" && "bg-muted",
        )}
        prefetch={false}
      >
        {session.user.image ? (
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image} />
            <AvatarFallback>
              <UserIcon size={25} />
            </AvatarFallback>
          </Avatar>
        ) : (
          <UserIcon
            size={25}
            className={cn(
              path === "/dashboard/profile"
                ? "text-foreground"
                : "text-gray-500",
            )}
          />
        )}
        <span className="text-lg">
          {path === "/dashboard/profile" ? "User" : ""}
        </span>
      </Link>
    </div>
  );
}
