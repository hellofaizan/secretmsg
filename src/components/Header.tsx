"use client";

import React from "react";
import Image from "next/image";
import ProfileComponent from "./profile";
import { Button } from "./ui/button";
import { IconBrandDiscord, IconCup } from "@tabler/icons-react";
import Link from "next/link";

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

          <div className="flex items-center gap-2">
            <Link
              href="https://buymeacoffee.com/hellofaizan"
              target="_blank"
              passHref
            >
              <Button variant={"ghost"} size={"icon"}>
                <IconCup size={32} className="hover:text-yellow-500" />
              </Button>
            </Link>
            <Link
              href="https://discord.com/invite/QuNdFzdKMx"
              target="_blank"
              passHref
            >
              <Button variant={"ghost"} size={"icon"}>
                <IconBrandDiscord size={32} className="hover:text-[#5865F2]" />
              </Button>
            </Link>
            {username ? (
              <ProfileComponent session={session} />
            ) : (
              <Button
                className="text-base font-semibold"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = "/auth";
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
