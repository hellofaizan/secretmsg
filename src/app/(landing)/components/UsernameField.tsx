"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { ConfettiButton } from "@/components/magicui/confetti";

const usernameSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username must be at least 1 character long.",
    })
    .max(20, {
      message: "Username must not be longer than 20 characters.",
    }),
});

type UsernameValues = z.infer<typeof usernameSchema>;

const GetUsername = ({ session }: any) => {
  const router = useRouter();

  const form = useForm<UsernameValues>({
    resolver: zodResolver(usernameSchema),
    mode: "onChange",
  });

  function onSubmit(data: UsernameValues) {
    // save username to local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("username", data.username);
    }
    router.push(`/auth?callbackUrl=/dashboard/username?u=${data.username}`);
  }

  return (
    <div className="flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex flex-col justify-center md:flex-row md:items-center w-full md:gap-2"
        >
          <div className="flex md:flex-row">
            <p className="font-manrope rounded-l-[6px] bg-neutral-600 bg-opacity-30 p-4 text-neutral-800 backdrop-blur-3xl dark:text-neutral-300 md:px-4">
              whispertxt.xyz/
            </p>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <input
                      className="w-full rounded-r-[6px] border p-4 lowercase focus-visible:outline-none"
                      placeholder={"username"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="relative md:absolute" />
                </FormItem>
              )}
            />
          </div>
          <ConfettiButton
            type="submit"
            className="h-15 text-md font-manrope mt-4 whitespace-nowrap rounded-sm bg-transparent p-4 px-5 font-bold text-white bg-black hover:to-[#3F2B96] hover:shadow-md hover:shadow-[#FF5400]/20 md:mt-0 md:self-start"
          >
            CLAIM NOW ✨
          </ConfettiButton>
        </form>
      </Form>
    </div>
  );
};

export default GetUsername;
