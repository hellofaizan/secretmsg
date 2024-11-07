import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function GoogleLogin() {
  return (
    <Button
      size={"default"}
      className="flex h-14 items-center gap-2 rounded-[50px] border bg-white hover:bg-white"
    >
      <Image
        src={"/logos/google.svg"}
        width={20}
        height={20}
        alt="Pouzz Logo"
        className="w-h-5 h-5"
      />
      <p className="text-lg text-[#727272]">Login with Google</p>
    </Button>
  );
}
