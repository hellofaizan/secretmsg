import GetUsername from "./components/UsernameField";
import { auth } from "@/server/auth";
import Meteors from "@/components/magicui/meteors";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import SparklesText from "@/components/magicui/sparkles-text";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default async function HomePage() {
  const session = await auth();
  return (
    <>
      <Header session={session} />
      <div className="relative flex min-h-dvh items-center justify-center overflow-hidden md:min-h-screen">
        <Meteors number={15} />
        <div className="flex w-full flex-col md:w-2/3">
          <div className="flex flex-col items-center justify-center p-4 md:mt-0 md:min-h-screen md:p-2">
            <Link
              href={"https://discord.com/invite/QuNdFzdKMx"}
              target="_blank"
              className="group mb-4 max-w-fit rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Secretmsg</span>
                <ChevronsRight
                  size={15}
                  className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </AnimatedShinyText>
            </Link>
            <h1 className="flex items-baseline gap-2 text-center text-4xl font-extrabold text-black md:text-5xl">
              <SparklesText className="text-4xl md:text-5xl" text="Secret" />{" "}
              Message🤐
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-center text-base font-semibold">
              You have been invited to a <span className="font-bold">Whisper txt</span>. Please login now to
              start receiving <span className="font-bold">anonymous</span> messages.
            </p>
            <GetUsername session={session} />
          </div>
        </div>
      </div>
    </>
  );
}
