"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandReddit,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandGmail,
  IconShare
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Copy, Check, LinkIcon, Flag, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface ShareLinkProps {
  username: string;
}

export default function ShareProfile({ username }: ShareLinkProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const link = `https://pouzz.xyz/${username}`;

  const shareSocialMedia = (profileLink: string) => {
    return (
      <div className="mb-2 max-h-64 overflow-y-scroll text-lg">
        <Link
          href={`https://twitter.com/intent/tweet?text=${profileLink}`}
          target="_blank"
          className="flex w-full gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <IconBrandTwitter className="text-[#1DA1F2] hover:scale-105" />
          Share on Twitter
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${profileLink}`}
          target="_blank"
          className="flex w-full gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <IconBrandFacebook className="text-[#4267B2] hover:scale-105" />
          Share on Facebook
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${profileLink}`}
          target="_blank"
          className="flex w-full gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <IconBrandLinkedin className="text-[#0a66c2] hover:scale-105" />
          Share on LinkedIn
        </Link>
        <Link
          href={`https://api.whatsapp.com/send?text=${profileLink}`}
          target="_blank"
          className="flex w-full gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <IconBrandWhatsapp className="text-[#25D366] hover:scale-105" />
          Share on WhatsApp
        </Link>
        <Link
          href={`https://t.me/share/url?url=${profileLink}`}
          target="_blank"
          className="flex w-full gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <IconBrandTelegram className="text-[#0088cc] hover:scale-105" />
          Share on Telegram
        </Link>
        <Link
          href={`https://www.reddit.com/submit?url=${profileLink}`}
          target="_blank"
          className="flex w-full gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <IconBrandReddit className="text-[#FF4500] hover:scale-105" />
          Share on Reddit
        </Link>
        <Link
          href={`mailto:?body=${profileLink}`}
          target="_blank"
          className="flex w-full gap-2 rounded-lg p-2 hover:bg-muted"
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
          className="flex w-full cursor-pointer gap-2 rounded-lg p-2 hover:bg-muted"
        >
          <LinkIcon className="hover:scale-105" />
          More Options
        </div>
      </div>
    );
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            size={"xsicon"}
            className="hover:bg-muted text-black/85"
          >
            <IconShare size={18} />{" "}
          </Button>
        </DialogTrigger>
        {/* // input field for gif search */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share Profile</DialogTitle>
            <DialogDescription>
              Share this profile with your friends and family.
            </DialogDescription>
          </DialogHeader>

          <Separator />

          {/* Link Input */}
          <div className="flex w-full gap-2">
            <Input value={link || ""} readOnly className="w-full text-center text-md" />
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

          <Separator />

          {/* Social Media Share */}
          <div className="flex flex-col gap-2">{shareSocialMedia(link)}</div>

          <Separator />

          {/* Report Link */}
          <Link
            href={`https://x.com/intent/post?text=%40hubulwattan%20Reporting%20this%20user%20https%3A%2F%2Fpouzz.xyz%2F${username}.%20Please%20have%20a%20look.`}
            target="_blank"
            className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
          >
            <span className="flex w-full gap-2">
              <Flag className="text-red-500 hover:scale-105" />
              Report this link
            </span>
            <ArrowUpRight className="text-gray-500" />
          </Link>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-transparent hover:text-gray-700 dark:hover:text-gray-300"
        >
          <IconShare size={20} />{" "}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>Share this link!</DrawerTitle>
          <DrawerDescription>
            Share this link with your friends and family.
          </DrawerDescription>
        </DrawerHeader>
        {/* Link Input */}
        <div className="mb-4 flex w-full gap-2">
          <Input value={link || ""} readOnly className="w-full text-center" />
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
        <Separator />

        {/* Social Media Share */}
        <div className="mt-4 flex flex-col gap-2">{shareSocialMedia(link)}</div>
        <Separator />
        {/* Report Link */}
        <Link
          href={`/report?u=${username}`}
          target="_blank"
          className="mt-4 flex items-center justify-between rounded-lg p-2 hover:bg-muted"
        >
          <span className="flex w-full gap-2">
            <Flag className="text-red-500 hover:scale-105" />
            Report this link
          </span>
          <ArrowUpRight className="text-gray-500" />
        </Link>
      </DrawerContent>
    </Drawer>
  );
}
