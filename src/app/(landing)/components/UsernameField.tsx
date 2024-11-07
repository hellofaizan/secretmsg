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
import Image from "next/image";
import { ChevronsRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    router.push(`/auth?callbackUrl=/dashboard/profile?u=${data.username}`);
  }

  return (
    <div className="flex w-full items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="flex w-full items-center gap-[1px] overflow-hidden rounded-[50px] border bg-white px-6 py-3">
            <p className="font-manrope flex items-center gap-1 text-2xl text-neutral-800">
              pouzz.xyz/
            </p>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <input
                      className="w-full text-2xl lowercase focus-visible:outline-none md:w-36 lg:w-full"
                      placeholder={"username"}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <ConfettiButton
              type="submit"
              variant={"ghost"}
              size={"xsicon"}
              className="flex h-11 w-16 items-center justify-center rounded-full bg-[#E73336] hover:bg-[#e74447]"
            >
              <ChevronsRightIcon size={24} className="text-white" />
            </ConfettiButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GetUsername;
