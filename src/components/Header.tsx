"use client";

import React from "react";
import Image from "next/image";
import ProfileComponent from "./profile";
import { Button } from "./ui/button";

export default function Header({ session }: any) {
  const username = session?.user?.username;
  return (
    <div className="absolute z-10 mt-10 flex w-full justify-center bg-transparent">
      <div className="flex w-[60%]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              className="rounded-md"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold">Secret Msg</span>
          </div>

          <div>
            {username ? (
              <ProfileComponent session={session} />
            ) : (
              <Button
                className="text-base font-semibold"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href =
                      "/auth?callbackUrl=/dashboard/username";
                  }
                }}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
