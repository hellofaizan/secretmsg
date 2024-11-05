"use client";

import { Camera, Trash2 } from "lucide-react";
import React, { useState } from "react";

import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

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
export default function MessageCard(message: MessageProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const timeAgo = new TimeAgo("en-US");

  const captureSS = () => {
    console.log("Capturing");
  };
  return (
    <div className="mb-6 flex flex-col gap-1 overflow-hidden md:mb-8">
      <div className="block rounded-lg border bg-muted/20 p-5 text-lg">
        <p className="font-normal text-gray-700">{message.message.content}</p>
      </div>
      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-normal">
          {timeAgo.format(new Date(message.message.timestamp))}
        </p>

        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1 rounded-md p-1 text-sm text-gray-700 hover:bg-muted"
            title="Capture Screenshot"
            onClick={() => captureSS()}
          >
            <Camera size={18} className="text-gray-500" />
          </button>

          <button
            className="flex items-center gap-1 rounded-md p-1 text-sm hover:bg-muted"
            title="Remove this message"
            onClick={() => captureSS()}
          >
            <Trash2 size={18} className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
