"use client";
"use cache";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div className="flex flex-col gap-2 rounded-lg border" id="username">
      <div className="flex flex-col gap-1 bg-muted/50 px-4 py-4">
        <p className="text-xl font-semibold">Logout</p>
      </div>
      <div className="flex items-center justify-between px-4 pb-3">
        <p className="text-xs text-muted-foreground md:text-sm">
          Logout from your account
        </p>

        <Button
          onClick={() => {
            signOut();
          }}
          variant={"outline"}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
