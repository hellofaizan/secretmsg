import { auth } from "@/server/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Avatars } from "./components/avatarcircles";
import GetUsername from "./components/username";
import { SeparatorCustom } from "@/components/separator";
import GoogleLogin from "./components/googlelogin";

export default async function HomePage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="relative flex min-h-dvh justify-center overflow-hidden md:min-h-dvh">
        <div className="flex w-full flex-col pt-[60px] md:w-[95%] md:pt-[150px] lg:w-[70%]">
          <div className="flex w-full flex-col items-baseline gap-8 md:flex-row md:gap-2">
            <div className="flex flex-1 flex-col">
              <Image
                src={"/assets/logo.svg"}
                width={100}
                height={100}
                alt="Pouzz Logo"
                className="h-20 w-20 md:h-24 md:w-24"
              />
              <p className="text-3xl font-bold md:text-2xl lg:text-4xl">
                <span className="text-[#E73336]">Pouzz</span> - Get anonymous
                confession, questions and testimonials
              </p>

              <Avatars />
            </div>

            <div className="mt-2 flex flex-1 flex-col gap-2 md:ml-4 md:mt-0 md:gap-4">
              <GetUsername />
              <SeparatorCustom
                label={<span className="px-2">OR</span>}
                gradient
              />

              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
