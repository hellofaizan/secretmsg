"use client";

import React, { useState } from "react";
import {
  IconBrandGoogle,
  IconBrandX,
  IconBrandApple,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/routes";
import { useSearchParams } from "next/navigation";
import { FormError } from "./FormError";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Loader } from "lucide-react";

export default function page() {
  const searchParams = useSearchParams();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<string>("");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "The Email is already in use from different Authentication Provider"
      : "Opps! Something went wrong. Please try again later.";

  const callbackUrl = searchParams.get("callbackUrl");

  // handle click
  const handleClick = (provider: "google" | "twitter" | "apple") => {
    setDisabled(true);
    setLoading(provider);
    try {
      signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto flex h-screen flex-col items-center justify-center px-4 py-8 lg:py-0">
        <div className="mx-auto w-full max-w-md rounded-sm bg-transparent p-3 shadow-input md:rounded-lg md:p-8">
          <h2 className="text-center text-3xl font-bold">
            Welcome to Pouzz.xyz
          </h2>
          <p className="mt-2 max-w-sm text-center text-sm text-neutral-600">
            Login to start receiving anonymous messages.
          </p>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            {/* Google */}
            <Button
              onClick={() => handleClick("google")}
              disabled={disabled}
              variant={"outline"}
              className="relative flex h-12 w-full items-center justify-start space-x-2 rounded-md px-4 font-medium"
              type="submit"
            >
              {loading === "google" ? (
                <Loader className="h-6 w-6 animate-spin" />
              ) : (
                <IconBrandGoogle className="h-6 w-6" />
              )}
              <span className="textwhite text-lg">Google</span>
            </Button>

            {/* X */}
            {/* <Button
              onClick={() => handleClick("twitter")}
              disabled={disabled}
              variant={"outline"}
              className="relative flex h-12 w-full items-center justify-start space-x-2 rounded-md px-4 font-medium"
              type="submit"
            >
              {loading === "twitter" ? (
                <Loader className="h-6 w-6 animate-spin" />
              ) : (
                <IconBrandX className="h-6 w-6" />
              )}
              <span className="textwhite text-lg">Twitter/X</span>
            </Button> */}

            {/* apple */}
            {/* <Button
              onClick={() => handleClick("apple")}
              disabled={disabled}
              variant={"outline"}
              className="relative flex h-12 w-full items-center justify-start space-x-2 rounded-md px-4 font-medium"
              type="submit"
            >
              {loading === "apple" ? (
                <Loader className="h-6 w-6 animate-spin" />
              ) : (
                <IconBrandApple className="h-6 w-6" />
              )}
              <span className="textwhite text-lg">Apple</span>
            </Button> */}

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
