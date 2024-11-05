"use client";

import React from "react";
import Image from "next/image";
import ProfileComponent from "./profile";
import { Button } from "./ui/button";
import { IconBrandDiscord, IconBrandX, IconCup } from "@tabler/icons-react";
import Link from "next/link";

export default function Header({ session }: any) {
  const user = session?.user;
  return (
    <div className="absolute z-10 mt-5 flex w-full justify-center bg-transparent md:mt-10">
      <div className="mx-2 flex w-full md:w-[60%]">
        <div className="flex w-full items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              className="rounded-md"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold">Pouzz</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link href="https://x.com/hubulwattan" target="_blank" passHref>
              <Button variant={"ghost"} size={"icon"}>
                <IconBrandX size={28} className="hover:text-black/80" />
              </Button>
            </Link>
            {user ? (
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
