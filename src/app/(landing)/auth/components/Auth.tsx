"use client";

import React, { useState } from 'react'
import LogoImg from "../../../../../public/favicon.ico";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandDiscord,
    IconBrandFacebook,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/routes"
import { useSearchParams } from 'next/navigation';
import { FormError } from "./FormError";
import Link from 'next/link';

export default function page() {

    const searchParams = useSearchParams();
    const [disabled, setDisabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "The Email is already in use from different Authentication Provider" : "Opps! Something went wrong. Please try again later.";

    const callbackUrl = searchParams.get("callbackUrl");

    // handle click
    const handleClick = (provider: "google" | "github" | "discord" | "facebook") => {
        setDisabled(true);
        setIsLoading(true)
        try {
            signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
        } catch (error) {
            console.error(error);
            setDisabled(false);
            setIsLoading(false);
        }
        finally {
            setIsLoading(false);
            setDisabled(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto h-screen lg:py-0">
            <Link href="#" className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src={LogoImg.src as string} alt="logo" />
                Tielinks
            </Link>

            <div className="max-w-md w-full mx-auto rounded-sm md:rounded-lg p-3 md:p-8 shadow-input bg-transparent">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to Aceternity
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Login to aceternity if you can because we don&apos;t have a login flow
                    yet
                </p>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">
                    {/* Google */}
                    <button onClick={() => handleClick("google")} disabled={disabled}
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit">
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Google
                        </span>
                        <BottomGradient />
                    </button>

                    {/* Discord */}
                    <button onClick={() => handleClick("discord")} disabled={disabled}
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit">

                        <IconBrandDiscord className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Discord
                        </span>
                        <BottomGradient />
                    </button>

                    {/* Facebook */}
                    <button onClick={() => handleClick("facebook")} disabled={disabled}
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit">

                        <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Facebook
                        </span>
                        <BottomGradient />
                    </button>

                    {/* Github */}
                    <button onClick={() => handleClick("github")} disabled={disabled}
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit">

                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Github
                        </span>
                        <BottomGradient />
                    </button>

                    {urlError && <FormError message={urlError} />}
                </div>
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};
