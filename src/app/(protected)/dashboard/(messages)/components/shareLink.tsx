"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Check, Copy, LinkIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function ShareLink({ username }: { username: string }) {
  const [copy, setCopy] = useState(false);
  const link = `https://pouzz.xyz/${username}`;

  const shareSocialMedia = (profileLink: string) => {
    return (
      <div className="mb-2 flex flex-col gap-2 text-lg">
        <Link
          href={`https://twitter.com/intent/tweet?text=${profileLink}`}
          target="_blank"
          className="flex w-full items-center gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <IconBrandTwitter className="text-[#1DA1F2] hover:scale-105" />
          Share on Twitter
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${profileLink}`}
          target="_blank"
          className="flex w-full items-center gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <IconBrandFacebook className="text-[#4267B2] hover:scale-105" />
          Share on Facebook
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${profileLink}`}
          target="_blank"
          className="flex w-full items-center gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <IconBrandLinkedin className="text-[#0a66c2] hover:scale-105" />
          Share on LinkedIn
        </Link>
        <Link
          href={`https://api.whatsapp.com/send?text=${profileLink}`}
          target="_blank"
          className="flex w-full items-center gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <IconBrandWhatsapp className="text-[#25D366] hover:scale-105" />
          Share on WhatsApp
        </Link>
        <Link
          href={`https://t.me/share/url?url=${profileLink}`}
          target="_blank"
          className="flex w-full items-center gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <IconBrandTelegram className="text-[#0088cc] hover:scale-105" />
          Share on Telegram
        </Link>
        <Link
          href={`https://www.reddit.com/submit?url=${profileLink}`}
          target="_blank"
          className="flex w-full items-center gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <IconBrandReddit className="text-[#FF4500] hover:scale-105" />
          Share on Reddit
        </Link>
        <Link
          href={`mailto:?body=${profileLink}`}
          target="_blank"
          className="flex w-full items-center gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <IconBrandGmail className="text-[#C71610] hover:scale-105" />
          Share via Email
        </Link>
        <div
          onClick={() => {
            // open share menu of device
            if (navigator.share) {
              navigator.share({
                title: "Check out this person!",
                url: profileLink,
              });
            }
          }}
          className="itens-center flex w-full cursor-pointer gap-2 rounded-lg border p-2 hover:bg-muted"
        >
          <LinkIcon className="hover:scale-105" />
          More Options
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="mt-2 w-full text-center text-lg">No message available</p>

      <div className="mt-4 flex w-full flex-col items-center gap-4 rounded-lg border p-4">
        <p className="text-xl font-bold md:text-2xl">
          Share <span className="text-[#EA3135]">Pouzz</span> Link
        </p>

        <div className="flex w-full flex-col items-center gap-2 md:w-[70%] lg:w-[50%]">
          <div className="flex w-full gap-2">
            <Input
              value={link || ""}
              readOnly
              className="text-md w-full text-center"
            />
            <Button
              variant="outline"
              size={"icon"}
              onClick={() => {
                navigator.clipboard.writeText(link);
                setCopy(true);
              }}
            >
              {copy ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Copy size={20} />
              )}
            </Button>
          </div>

          <div className="mt-4 flex w-full flex-col gap-2">
            {shareSocialMedia(link)}
          </div>
        </div>
      </div>
    </div>
  );
}
