"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Countryflags from "@/components/countryflags";

export default function ViewsByCountryComp(data: any) {
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
        <p>Country</p>
        <p>Visitors</p>
      </div>
      <div className="flex flex-col gap-1">
        {data.data.length > 0 ? (
          data.data.map((item: any) => (
            <div
              key={item.country}
              className="mt-1 flex items-center justify-between rounded-sm px-2 py-[3px] text-sm hover:bg-muted"
            >
              <div className="flex items-center gap-1">
                <Countryflags countryName={item.country || ""} />
                <p>{item.country || "Unknown"}</p>
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
