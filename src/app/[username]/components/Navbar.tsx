"use client";

import { IconBrandX } from "@tabler/icons-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between border-b py-3 pb-3 md:w-[60%] lg:w-[45%] px-2">
      <p className="text-xl">Pouzz.xyz</p>

      <IconBrandX />
    </div>
  );
}
