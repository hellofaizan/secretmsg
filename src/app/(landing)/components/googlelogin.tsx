"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

export default function GoogleLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const handleClick = () => {
    setLoading(true);
    try {
      signIn("google");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button
      size={"default"}
      className="flex h-14 items-center gap-2 rounded-[50px] border bg-white hover:bg-white"
      onClick={handleClick}
    >
      {loading ? (
        <Loader size={20} className="animate-spin text-[#727272]" />
      ) : (
        <Image
          src={"/logos/google.svg"}
          width={20}
          height={20}
          alt="Pouzz Logo"
          className="w-h-5 h-5"
        />
      )}
      <p className="text-lg text-[#727272]">Login with Google</p>
    </Button>
  );
}
