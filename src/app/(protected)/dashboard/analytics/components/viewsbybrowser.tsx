"use client";

import {
  IconBrandApple,
  IconBrandChrome,
  IconBrandEdge,
  IconBrandFacebook,
  IconBrandFirefox,
  IconBrandInstagram,
  IconBrandOpera,
  IconBrandSafari,
  IconWorldWww,
} from "@tabler/icons-react";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function ViewsByBrowserComp(data: any) {
  const browserIcons = (browser: string) => {
    switch (browser) {
      case "Chrome":
        return <IconBrandChrome size={17} />;
      case "Chrome WebView":
        return <IconBrandChrome size={17} />;
      case "Instagram":
        return <IconBrandInstagram size={17} />;
      case "Facebook":
        return <IconBrandFacebook size={17} />;
      case "Firefox":
        return <IconBrandFirefox size={17} />;
      case "iOS":
        return <IconBrandApple size={17} />;
      case "Opera":
        return <IconBrandOpera size={17} />;
      case "Safari":
        return <IconBrandSafari size={17} />;
      case "Mobile Safari":
        return <IconBrandSafari size={17} />;
      case "Edge":
        return <IconBrandEdge size={17} />;
      default:
        return <IconWorldWww size={17} />;
    }
  };
  const percentage = (count: number) => {
    const total = data.data.reduce(
      (acc: number, item: any) => acc + item._count.id,
      0,
    );
    return ((count / total) * 100).toFixed(0);
  };
  return (
    <div className="flex flex-col rounded-lg border p-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>Browser</p>
        <p>Visiotors</p>
      </div>
      <div className="flex flex-col gap-1">
        {data.data.length > 0 ? (
          data.data.map((item: any) => (
            <div
              key={item.browser}
              className="mt-1 flex items-center justify-between rounded-sm px-2 py-[3px] text-sm hover:bg-muted"
            >
              <div className="flex items-center gap-1">
                {browserIcons(item.browser)}
                <p>{item.browser || "(Unknown)"}</p>
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
