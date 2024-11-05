"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconBrandYoutube } from "@tabler/icons-react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function HelpVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="bg-transparent p-2">
          <p className="flex items-center gap-1 text-xs text-muted-foreground md:text-sm">
            <IconBrandYoutube size={16} className="text-red-500" />
            Find User ID?
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>How to get User ID</DialogTitle>
          <DialogDescription>
            Watch this quick video to see, how to get Telegram User ID
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex flex-col gap-1">
          <LiteYouTubeEmbed
            id="KKuPq1Opc60" // Default none, id of the video or playlist
            adNetwork={true}
            playlist={false}
            poster="hqdefault"
            title="YouTube Embed"
            noCookie={true}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
