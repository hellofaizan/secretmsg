"use client";

import React from "react";
import { ChartColumn, HomeIcon, Lock, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar({ session }: { session: any }) {
  const path = usePathname();
  const role = session?.user?.role;
  return (
    <div className="flex w-full items-center justify-between border-b pb-3 md:w-[60%] lg:w-[45%]">
      <Link
        href="/dashboard"
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted text-gray-700",
          path === "/dashboard" && "bg-muted",
        )}
        prefetch={false}
      >
        <HomeIcon
          size={25}
          className={cn(
            path === "/dashboard" ? "text-gray-700" : "text-gray-500",
          )}
        />
        <span className="text-lg">{path === "/dashboard" ? "Home" : ""}</span>
      </Link>

      <Link
        href="/dashboard/analytics"
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted text-gray-700",
          path === "/dashboard/analytics" && "bg-muted",
        )}
        prefetch={false}
      >
        <ChartColumn
          size={25}
          className={cn(
            path === "/dashboard/analytics"
              ? "text-gray-700"
              : "text-gray-500",
          )}
        />
        <span className="text-lg">
          {path === "/dashboard/analytics" ? "Analytics" : ""}
        </span>
      </Link>

      {role === "ADMIN" && (
        <Link
          href="/dashboard/admin"
          className={cn(
            "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted text-gray-700",
            path === "/dashboard/admin" && "bg-muted",
          )}
          prefetch={false}
        >
          <Lock
            size={25}
            className={cn(
              path === "/dashboard/admin" ? "text-gray-700" : "text-gray-500",
            )}
          />
          <span className="text-lg">
            {path === "/dashboard/admin" ? "Admin" : ""}
          </span>
        </Link>
      )}

      <Link
        href="/dashboard/profile"
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted text-gray-700",
          path === "/dashboard/profile" && "bg-muted",
        )}
        prefetch={false}
      >
        {session.user.image ? (
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image} />
            <AvatarFallback>
              <UserIcon size={22} />
            </AvatarFallback>
          </Avatar>
        ) : (
          <UserIcon
            size={25}
            className={cn(
              path === "/dashboard/profile"
                ? "text-gray-700"
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
