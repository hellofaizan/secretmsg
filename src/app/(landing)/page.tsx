import { auth } from "@/server/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Avatars } from "./components/avatarcircles";
import GetUsername from "./components/username";
import { SeparatorCustom } from "@/components/separator";
import GoogleLogin from "./components/googlelogin";
import Topheader from "./layouts/topheader";
import Features from "./layouts/feature";

export default async function HomePage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="relative flex min-h-dvh justify-center overflow-hidden md:min-h-dvh">
        <div className="flex w-full flex-col pt-[100px] md:w-[95%] md:pt-[150px] lg:w-[70%]">
          <Topheader />
          <Features />
        </div>
      </div>
    </>
  );
}
