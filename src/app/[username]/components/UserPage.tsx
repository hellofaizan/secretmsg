"use cache";

import React from "react";
import { User2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { headers } from "next/headers";
import VisitCouter from "@/actions/visitCounter";
import MessageForm from "./messageForm";
import ShareProfile from "./shareprofile";
import Image from "next/image";
import Footer from "@/app/(landing)/components/footer";

export default async function page({ user, username }: any) {
  const session = await auth();
  const currentUser = session?.user;
  const request_headers = headers();
  const ip = request_headers.get("x-forwarded-for") || "";

  if (currentUser?.id === null) {
    VisitCouter({ userId: user?.id || "", request_headers }).catch((err) => {
      console.log("Error in visit counter", err);
    });
  } else {
    VisitCouter({
      userId: user?.id || "",
      visitorId: currentUser?.id,
      request_headers,
    }).catch((err) => {
      console.log("Error in visit counter", err);
    });
  }

  if (!user) {
    return (
      <div className="flex min-h-[80svh] items-center justify-center md:min-h-[90vh]">
        <div className="relative flex h-full min-h-[91svh] md:min-h-[90vh] w-full flex-col items-center justify-between overflow-hidden md:w-[60%] lg:w-[45%]">
          <div />
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/assets/logo.svg"}
              width={100}
              height={100}
              alt="Pouzz Logo"
              className="mb-4 h-20 w-20 md:h-24 md:w-24"
            />
            <div className="relative flex items-center rounded-xl bg-muted p-6 py-3 text-2xl text-[#727272] md:text-4xl">
              pouzz.xyz/
              <p className="text-[#0e0e0e]">{username}</p>
              <p className="absolute -right-4 -top-2 flex rotate-6 rounded-lg border border-green-500 bg-[#4fdd77] px-2 py-[2px] text-sm text-white">
                Available!
              </p>
            </div>

            <p className="-mt-4 text-sm">
              Pouzz - Connect Anonymously, Share Freely.
            </p>

            <Link href={"/#username"}>
              <Button
                variant={"default"}
                size={"xxl"}
                className="mt-4 flex items-center gap-1 rounded-xl text-xl"
              >
                Claim Username
              </Button>
            </Link>
          </div>

          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[90dvh] justify-center">
      {user?.username === currentUser?.username ? (
        <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4">
          <Link href="/dashboard" target="_blank">
            <Button variant={"outline"}>
              <User2 size={15} className="mr-1" /> Dashboard
            </Button>
          </Link>
        </div>
      ) : null}

      <div className="w-full md:w-[60%] lg:w-[45%]">
        <div className="my-5 flex flex-col gap-5 px-2 md:px-0">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-xl md:text-3xl">
              Send Message to{" "}
              <span className="flex flex-row items-center gap-1 font-semibold">
                {user.name}
                <ShareProfile username={user?.username} />
              </span>
            </div>
            <p className="text-sm md:text-base">
              {user.name} will never know who sent the message
            </p>
          </div>
          <MessageForm user={user} ip={ip} />
        </div>
      </div>
    </div>
  );
}
