"use client";

import { Camera } from "lucide-react";
import React, { useState } from "react";

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

  const captureSS = () => {
    console.log("Capturing");
  };
  return (
    <div className="mb-6 flex flex-col gap-1 overflow-hidden md:mb-8">
      <div className="block rounded-lg border bg-muted/20 p-5 text-lg">
        <p className="font-normal text-gray-700">{message.message.content}</p>
      </div>
      <div className="flex items-center justify-between px-4">
        <p className="text-sm font-normal">
          {new Date(message.message.timestamp).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "2-digit",
            hour: "numeric",
            minute: "numeric",
          })}
        </p>

        <button
          className="flex items-center gap-1 rounded-md border px-1 text-sm text-gray-700 hover:bg-muted"
          onClick={() => captureSS()}
        >
          <Camera size={18} className="text-gray-500" /> SS
        </button>
      </div>
    </div>
  );
}
