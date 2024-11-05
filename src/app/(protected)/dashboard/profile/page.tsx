import { auth } from "@/server/auth";
import { getUserById } from "@/server/user";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";
import PersonalData from "./components/personaldata";
import ChangeUsername from "./components/changeusername";
import LinkAccountComp from "./components/linkacc/linkaccounts";
import DeleteAccount from "./components/deleteaccount";
import Logout from "./components/logout";
import SetAlert from "./components/setalert";

export default async function page() {
  const session = await auth();
  const user = await getUserById(session?.user?.id as string);
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center md:min-h-screen">
          <Loader className="animate-spin" />{" "}
        </div>
      }
    >
      <div className="flex w-full justify-center px-3 md:px-0">
        <div className="w-full md:w-[60%] lg:w-[45%]">
          <div className="flex flex-col gap-4 py-4">
            <PersonalData user={user} />
            <ChangeUsername user={user} />
            <SetAlert user={user}/>
            <LinkAccountComp />
            <Logout />
            <DeleteAccount user={user} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
