"use cache";

import React from "react";
import { User2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { headers } from "next/headers";
import VisitCouter from "@/actions/visitCounter";
import MessageForm from "./messageForm";
import Image from "next/image";
import Footer from "@/app/(landing)/components/footer";
import { ConfettiButton } from "@/components/magicui/confetti";

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
        <div className="relative flex h-full min-h-[91svh] w-full flex-col items-center justify-between overflow-hidden md:min-h-[90vh] md:w-[60%] lg:w-[45%]">
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
              <ConfettiButton
                variant={"default"}
                size={"xxl"}
                className="mt-4 flex items-center gap-1 rounded-xl bg-[#E73336] p-3 px-8 text-xl text-white hover:bg-[#e74447]"
              >
                Claim Username
              </ConfettiButton>
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
        <div className="my-5 flex flex-col gap-3 px-2 pt-8 md:px-0">
          <MessageForm user={user} ip={ip} />

          <div className="mt-24 flex w-full items-center justify-center md:mt-32">
            <div className="flex w-max flex-col items-center justify-center gap-2">
              <div className="relative flex items-center rounded-xl bg-muted p-6 py-3 text-2xl text-[#727272] md:text-4xl">
                pouzz.xyz/
                <p className="text-[#0e0e0e]">yourname</p>
                <p className="absolute -right-4 -top-2 flex rotate-6 rounded-lg border border-green-500 bg-[#4fdd77] px-2 py-[2px] text-sm text-white">
                  It could be you!
                </p>
              </div>

              <p className="text-xs md:text-sm">
                Pouzz - Connect Anonymously, Share Freely.
              </p>

              <Link href={"/"}>
                <ConfettiButton
                  variant={"default"}
                  size={"xxl"}
                  className="mt-4 flex items-center gap-1 rounded-xl bg-[#E73336] p-3 px-8 text-xl text-white hover:bg-[#e74447]"
                >
                  Join Pouzz Now
                </ConfettiButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
