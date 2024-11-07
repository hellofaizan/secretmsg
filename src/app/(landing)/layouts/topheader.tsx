import Image from "next/image";
import React from "react";
import { Avatars } from "../components/avatarcircles";
import GetUsername from "../components/username";
import { SeparatorCustom } from "@/components/separator";
import GoogleLogin from "../components/googlelogin";

export default function Topheader() {
  return (
    <div className="flex w-full flex-col gap-8 md:flex-row md:gap-2">
      <div className="flex flex-1 flex-col">
        <Image
          src={"/assets/logo.svg"}
          width={100}
          height={100}
          alt="Pouzz Logo"
          className="h-20 w-20 md:h-24 md:w-24"
        />
        <p className="text-3xl font-bold md:text-2xl lg:text-4xl">
          <span className="text-[#E73336]">Pouzz</span> - Get anonymous
          confession, questions and testimonials
        </p>

        <Avatars />
      </div>

      <div className="flex h-full flex-1 items-end pb-4">
        <div className="mb-2 flex h-min flex-1 flex-col gap-2 md:ml-16 md:mb-0 md:gap-3">
          <GetUsername />
          <SeparatorCustom label={<span className="px-2">OR</span>} gradient />

          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}
