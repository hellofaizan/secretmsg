import { auth } from "@/server/auth";
import { getMessages } from "@/server/user";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";
import MessageCard from "./components/messageCard";
import ShareLink from "./components/shareLink";

export default async function page() {
  const session = await auth();

  const messages = await getMessages(session?.user.id || "");
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center md:min-h-screen">
          <Loader className="animate-spin" />{" "}
        </div>
      }
    >
      <div className="flex w-full justify-center px-3 pt-3 md:px-0">
        <div className="w-full md:w-[60%] lg:w-[45%]">
          {messages && messages?.length > 0 ? (
            messages.map((item: any) => (
              <MessageCard message={item} key={item.id} />
            ))
          ) : (
            <ShareLink username={session?.user?.username || ""} />
          )}
        </div>
      </div>
    </Suspense>
  );
}
