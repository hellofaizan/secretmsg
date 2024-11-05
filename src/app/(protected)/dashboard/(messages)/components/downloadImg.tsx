"use client";

import React, { useState } from "react";
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
import { Camera, Clock } from "lucide-react";

import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import TimeAgo from "javascript-time-ago";
import Image from "next/image";

interface MessageProps {
  message: {
    id: string;
    content: string;
    timestamp: string;
    ip?: string;
    city?: string;
    latitude?: string;
    longitude?: string;
    senderId?: string;
  };
}

export default function DownloadImage({ message }: MessageProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const timeAgo = new TimeAgo("en-US");

  const captureSS = () => {
    const screenshotElement = document.getElementById(
      `screenshot-${message.id}`,
    );
    if (screenshotElement) {
      htmlToImage.toPng(screenshotElement).then(function (dataUrl) {
        download(dataUrl, `pouzz-${message.id}.png`);
        setOpen(false);
        if (isDesktop) {
          // Download the image
          download(dataUrl, `pouzz-${message.id}.png`);
          setOpen(false);
        } else {
          // Trigger share intent
          if (navigator.share) {
            fetch(dataUrl)
              .then((res: any) => res.blob())
              .then((blob: any) => {
                navigator.share({
                  title: "Share Image",
                  files: [
                    new File([blob], `pouzz-${message.id}.png`, {
                      type: "image/png",
                    }),
                  ],
                });
              })
              .catch(console.error);
          } else {
            // Fallback to downloading the image
            download(dataUrl, `pouzz-${message.id}.png`);
            setOpen(false);
          }
        }
      });
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="flex items-center gap-1 rounded-md p-1 text-sm text-gray-700 hover:bg-muted"
            title="Capture Screenshot"
          >
            <Camera size={18} className="text-gray-500" />
          </button>
        </DialogTrigger>
        {/* // input field for gif search */}
        <DialogContent className="min-w-min">
          <DialogHeader>
            <DialogTitle>Share this confession</DialogTitle>
            <DialogDescription>
              Download and share this anonymous message with your social
              friends.
            </DialogDescription>
          </DialogHeader>

          <div className="flex w-full flex-col gap-2">
            <div
              id={`screenshot-${message.id}`}
              className="relative flex min-h-96 w-full items-center justify-center bg-[#161616]/95"
            >
              <div className="mx-16 my-16 flex flex-col items-center justify-center">
                <div className="flex h-full flex-col gap-1 rounded-lg bg-white px-5 py-4 text-lg">
                  <div className="flex gap-[6px]">
                    <div className="flex h-auto w-[3px] flex-none rounded-lg bg-[#e73336]" />
                    <p className="flex-1 font-normal text-black">
                      {message.content}
                    </p>
                  </div>
                  <p className="flex w-full items-center justify-end gap-1 text-end text-sm font-normal">
                    <Clock size={14} />
                    {timeAgo.format(new Date(message.timestamp))}
                  </p>
                </div>
                <Image
                  src="/assets/banner.png"
                  alt="Banner"
                  width={120}
                  height={0}
                  className="-mt-[1px] rounded-bl-lg rounded-br-lg"
                />
              </div>

              <div className="absolute bottom-2 right-4 flex items-center gap-1 text-sm text-gray-300">
                <Image
                  width={20}
                  height={20}
                  src={"/assets/logo.svg"}
                  alt="logo"
                  className="pt-1"
                />
                pouzz.xyz
              </div>
            </div>

            <Button
              variant="default"
              onClick={() => {
                captureSS();
              }}
            >
              Download
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button
          className="flex items-center gap-1 rounded-md p-1 text-sm text-gray-700 hover:bg-muted"
          title="Capture Screenshot"
        >
          <Camera size={18} className="text-gray-500" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>Share this confession</DrawerTitle>
          <DrawerDescription>
            Download and share this anonymous message with your social friends.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex w-full flex-col gap-2">
          <div
            id={`screenshot-${message.id}`}
            className="relative flex min-h-96 w-full items-center justify-center bg-[#161616]/95"
          >
            <div className="mx-16 my-16 flex flex-col items-center justify-center">
              <div className="flex h-full flex-col gap-1 rounded-lg bg-white px-5 py-4 md:text-lg">
                <div className="flex gap-[6px]">
                  <div className="flex h-auto w-[3px] flex-none rounded-lg bg-[#e73336]" />
                  <p className="flex-1 font-normal text-black">
                    {message.content}
                  </p>
                </div>
                <p className="flex w-full items-center justify-end gap-1 text-end text-sm font-normal">
                  <Clock size={14} />
                  {timeAgo.format(new Date(message.timestamp))}
                </p>
              </div>
              <Image
                src="/assets/banner.png"
                alt="Banner"
                width={120}
                height={0}
                className="-mt-[1px] rounded-bl-lg rounded-br-lg"
              />
            </div>

            <div className="absolute bottom-2 right-4 flex items-center gap-1 text-sm text-gray-300">
              <Image
                width={20}
                height={20}
                src={"/assets/logo.svg"}
                alt="logo"
                className="pt-1"
              />
              pouzz.xyz
            </div>
          </div>

          <Button
            variant="default"
            onClick={() => {
              captureSS();
            }}
          >
            Download
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function fetch(dataUrl: string): Promise<Response> {
  return window.fetch(dataUrl); // Use the global fetch function
}
