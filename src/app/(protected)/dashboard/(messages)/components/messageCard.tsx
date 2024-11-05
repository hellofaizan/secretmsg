"use client";

import { Trash2 } from "lucide-react";
import React from "react";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import DownloadImage from "./downloadImg";

TimeAgo.addDefaultLocale(en);

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
export default function MessageCard({ message }: MessageProps) {
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="mb-6 flex flex-col gap-1 overflow-hidden md:mb-7">
      <div className="flex h-full min-h-max gap-[6px] rounded-lg border bg-muted/20 p-5 md:text-lg">
        <div className="flex h-auto w-[2px] flex-none rounded-lg bg-[#e73336] md:w-1" />
        <p className="flex-1 font-normal text-gray-700">{message.content}</p>
      </div>
      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-normal">
          {timeAgo.format(new Date(message.timestamp))}
        </p>

        <div className="flex items-center gap-2">
          <DownloadImage message={message} key={message.id} />

          <button
            className="flex items-center gap-1 rounded-md p-1 text-sm hover:bg-muted"
            title="Remove this message"
          >
            <Trash2 size={18} className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
