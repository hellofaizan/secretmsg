"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { ConfettiButton } from "@/components/magicui/confetti";
import { ChevronsRightIcon, Loader } from "lucide-react";
import { signIn } from "next-auth/react";

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
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<UsernameValues>({
    resolver: zodResolver(usernameSchema),
    mode: "onChange",
  });

  function onSubmit(data: UsernameValues) {
    setLoading(true);
    try {
      signIn("google", {
        callbackUrl: `/dashboard/profile?handle=${data.username}#username`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex w-full items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="flex h-14 w-full items-center gap-[1px] overflow-hidden rounded-[50px] border bg-white px-4 py-2 md:px-6">
            <p className="font-manrope flex items-center gap-1 text-2xl text-[#464646]">
              pouzz.xyz/
            </p>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <input
                      id="username"
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E73336] p-2 hover:bg-[#e74447]"
            >
              {loading ? (
                <Loader size={26} className="animate-spin text-white" />
              ) : (
                <ChevronsRightIcon size={26} className="text-white" />
              )}
            </ConfettiButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GetUsername;
