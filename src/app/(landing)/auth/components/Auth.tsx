"use client";

import React, { useState } from "react";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandDiscord,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/routes";
import { useSearchParams } from "next/navigation";
import { FormError } from "./FormError";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function page() {
  const searchParams = useSearchParams();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "The Email is already in use from different Authentication Provider"
      : "Opps! Something went wrong. Please try again later.";

  const callbackUrl = searchParams.get("callbackUrl");

  // handle click
  const handleClick = (
    provider: "google" | "github" | "discord" | "facebook",
  ) => {
    setDisabled(true);
    setIsLoading(true);
    try {
      signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
    } catch (error) {
      console.error(error);
      setDisabled(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setDisabled(false);
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto flex h-screen flex-col items-center justify-center px-4 py-8 lg:py-0">
        <div className="mx-auto w-full max-w-md rounded-sm bg-transparent p-3 shadow-input md:rounded-lg md:p-8">
          <h2 className="text-3xl font-bold text-center">
            Login to Whisper Txt
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 text-center">
            Login to start receiving anonymous messages.
          </p>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            {/* Google */}
            <Button
              onClick={() => handleClick("google")}
              disabled={disabled}
              className="relative flex h-12 w-full items-center justify-start space-x-2 rounded-md bg-black px-4 font-medium text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGoogle className="h-7 w-7 text-white" />
              <span className="textwhite text-lg">Google</span>
              <BottomGradient />
            </Button>

            {/* Discord */}
            <Button
              onClick={() => handleClick("discord")}
              disabled={disabled}
              className="relative flex h-12 w-full items-center justify-start space-x-2 rounded-md bg-black px-4 font-medium text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandDiscord className="text-white h-7 w-7" />
              <span className="text-lg text-white">Discord</span>
              <BottomGradient />
            </Button>

            {/* Facebook */}
            <Button
              onClick={() => handleClick("facebook")}
              disabled={disabled}
              className="relative flex h-12 w-full items-center justify-start space-x-2 rounded-md bg-black px-4 font-medium text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandFacebook className="text-white h-7 w-7" />
              <span className="text-lg text-white">Facebook</span>
              <BottomGradient />
            </Button>

            {/* Github */}
            <Button
              onClick={() => handleClick("github")}
              disabled={disabled}
              className="relative flex h-12 w-full items-center justify-start space-x-2 rounded-md bg-black px-4 font-medium text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGithub className="h-7 w-7 text-white" />
              <span className="text-white text-lg">
                Github
              </span>
              <BottomGradient />
            </Button>

            {urlError && <FormError message={urlError} />}
          </div>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
