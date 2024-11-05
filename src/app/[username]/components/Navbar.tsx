"use client";

import React from "react";
import ShareProfile from "./shareprofile";

export default function Navbar({ username }: any) {
  return (
    <div className="flex w-full items-center justify-between border-b px-2 py-3 pb-3 md:w-[60%] lg:w-[45%]">
      <div className="flex items-center gap-1">
        <img className="h-10 w-10" src={"/assets/logo.svg"} alt="logo" />
        <p className="text-4xl font-bold text-[#3a3a3a]">Pouzz</p>
      </div>

      <div className="flex items-center gap-2">
        <ShareProfile username={username} />
      </div>
    </div>
  );
}
