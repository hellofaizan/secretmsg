"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className="mt-2 flex items-center gap-1">
      <div
        className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}
      >
        {avatarUrls.map((url, index) => (
          <Image
            key={index}
            className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
            src={url}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        ))}
        <div className="flex h-8 w-8 cursor-default items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white">
          +{numPeople}
        </div>
      </div>
      <p className="text-sm font-medium text-[#727272]">
        people joined Pouzz App
      </p>
    </div>
  );
};

export default AvatarCircles;
