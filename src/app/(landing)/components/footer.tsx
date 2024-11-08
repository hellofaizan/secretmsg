import { IconBrandX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mb-4 mt-10 flex w-full items-center justify-center md:justify-between">
      <Image
        src={"/assets/logo.svg"}
        width={50}
        height={50}
        alt="Pouzz Logo"
        className="hidden h-8 w-8 md:flex md:h-10 md:w-10"
      />

      <div className="flex flex-col items-center justify-center gap-1 text-sm">
        <div className="flex items-center gap-3">
          <Link href={"/terms"} target="_blank">
            Terms of Service
          </Link>
          <Link href={"/privacy"} target="_blank">
            Privacy policy
          </Link>
          <Link href={"/"} target="_blank">
            Safety
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <p>Pouzz App - Designed and Developed in Kashmir 🍁</p>
        </div>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <Link
          href={"https://x.com/hubulwattan"}
          target="_blank"
          data-umami-event={`footer-x`}
        >
          <IconBrandX size={25} className="text-black" />
        </Link>
      </div>
    </div>
  );
}
