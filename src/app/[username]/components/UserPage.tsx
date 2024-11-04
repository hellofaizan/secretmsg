import React from "react";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { headers } from "next/headers";
import VisitCouter from "@/actions/visitCounter";

export default async function page({ user }: any) {
  const session = await auth();
  const currentUser = session?.user;
  const request_headers = headers();

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
      <div className="relative overflow-hidden">
        <div className="flex min-h-[80dvh] flex-col items-center justify-center gap-2">
          <h1 className="font-sans text-2xl font-semibold">User Not Found</h1>
          <Button variant={"outline"} className="flex items-center">
            <Link href="/" passHref>
              Claim this username ✨
            </Link>
          </Button>
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
              <Pencil size={15} className="mr-1" /> Edit Profile
            </Button>
          </Link>
        </div>
      ) : null}

      {/* Share Button and theme toggle */}

      <div className="w-full md:w-[60%] lg:w-[45%]">{user.username}</div>
    </div>
  );
}
