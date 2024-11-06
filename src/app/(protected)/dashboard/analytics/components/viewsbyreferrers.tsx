"use client";
"use cache";

import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function ViewsByReferrersComp(data: any) {
  const referrersIcons = (link: string) => {
    // remove https:// and www. from the link and / at last
    link =
      link
        .replace(/(^\w+:|^)\/\//, "")
        .replace("www.", "")
        .split("/")[0] || "";
    return (
      <img
        src={`https://icons.duckduckgo.com/ip3/${link}.ico`}
        className="h-5 w-5 rounded-md"
        alt="Referrer"
      />
    );
  };
  const percentage = (count: number) => {
    const total = data.data.reduce(
      (acc: number, item: any) => acc + item._count.id,
      0,
    );
    return ((count / total) * 100).toFixed(0);
  };

  return (
    <div className="flex h-full flex-col rounded-lg border p-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>Referrers</p>
        <p>Visitors</p>
      </div>
      <div className="flex flex-col gap-1">
        {data.data.length > 0 ? (
          data.data.map((item: any) => (
            <div
              key={item.referrer}
              className="mt-1 flex items-center justify-between rounded-sm px-2 py-[3px] text-sm hover:bg-muted"
            >
              <div className="group flex items-center gap-1 overflow-hidden">
                {referrersIcons(item.referrer)}
                <Link
                  href={item.referrer}
                  target="_blank"
                  className="flex cursor-pointer items-center gap-3 overflow-hidden group-hover:text-blue-500"
                >
                  <p className="truncate whitespace-nowrap text-sm lg:max-w-96">
                    {item.referrer || "(None)"}
                  </p>
                  <Link2 size={16} className="hidden group-hover:block" />
                </Link>
              </div>
              <div className="flex h-full items-center">
                <p>{item._count.id}</p>
                <Separator orientation="vertical" className="mx-1" />
                <p className="w-6 text-xs font-extralight text-muted-foreground">
                  {percentage(item._count.id)}%
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-4 w-full text-center">Not Enough Data</p>
        )}
      </div>
    </div>
  );
}
