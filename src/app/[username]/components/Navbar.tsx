"use client";

import { IconBrandX } from "@tabler/icons-react";
import React from "react";
import ShareProfile from "./shareprofile";
import Link from "next/link";

export default function Navbar({ username }: any) {
  return (
    <div className="flex w-full items-center justify-between border-b px-2 py-3 pb-3 md:w-[60%] lg:w-[45%]">
      <p className="text-xl">Pouzz.xyz</p>

      <div className="flex items-center gap-2">
        <ShareProfile username={username} />

        <Link
          href={`https://twitter.com/hubulwattan`}
          target="_blank"
          className=" gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <IconBrandX size={20} className="hover:scale-105" />
        </Link>
      </div>
    </div>
  );
}
