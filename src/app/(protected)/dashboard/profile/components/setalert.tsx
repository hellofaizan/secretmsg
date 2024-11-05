"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleAlert, Loader } from "lucide-react";
import { FormSuccess } from "@/components/FormSuccess";
import { updateTelegram } from "@/schemas";
import { IconBrandTelegram } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import UpdateTelegram from "@/actions/updateTelegram";
import { HelpVideo } from "./helpvideo";

type formValues = z.infer<typeof updateTelegram>;

export default function SetAlert(user: any) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm<formValues>({
    resolver: zodResolver(updateTelegram),
    mode: "onChange",
    defaultValues: {
      username: user.user.telegram || "",
    },
  });

  const onSubmit = async (data: formValues) => {
    setDisabled(true);
    setLoading(true);
    setError(null);
    setSuccess(null);

    // TODO: Call your API here
    await UpdateTelegram(data.username).then((res) => {
      try {
        if (res && res.error) {
          setError(res.error || "An error occurred");
        } else {
          setSuccess(res.success ?? "Email sent successfully");
        }
      } finally {
        setLoading(false);
        setDisabled(false);
      }
    });
  };

  React.useEffect(() => {
    if (isDirty) {
      setDisabled(false);
    }
  }, [isDirty]);

  return (
    <div className="flex flex-col gap-4 rounded-lg border" id="username">
      <div className="flex flex-col gap-1 bg-muted/50 px-4 py-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">🔔 Telegram user</p>

          <HelpVideo />
        </div>
        <p className="text-sm text-muted-foreground">
          Get alert on Telegram, every time there is a new message
        </p>
      </div>
      <div className="flex flex-col p-2 px-4 pb-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 flex flex-col gap-3 md:flex-row"
        >
          <div className="flex w-full items-center gap-2 overflow-hidden rounded-[6px] border pl-1">
            <IconBrandTelegram size={28} className="ml-1 text-[#24A1DE]" />
            <Separator orientation="vertical" />
            <input
              {...register(`username`)}
              type="number"
              className="w-full p-2 lowercase focus-visible:outline-none"
              placeholder={"Telegram Chat ID"}
            />
          </div>
          <Button
            type="submit"
            className="flex w-max gap-1"
            disabled={disabled}
          >
            {loading && <Loader className="animate-spin" size={16} />}
            {!loading ? "Confirm" : "Confirming..."}
          </Button>
        </form>
        {errors && (
          <div
            className={
              errors.username ? "flex w-full flex-col gap-1" : "hidden"
            }
          >
            {errors.username && (
              <div
                className="relative w-full rounded-md border border-red-600 bg-red-200 px-3 py-2 text-gray-900 dark:border-red-700/40 dark:bg-red-600/20 dark:text-gray-300"
                role="alert"
              >
                <span className="flex flex-col text-xs">
                  {errors.username.message}
                </span>
              </div>
            )}
          </div>
        )}

        {error && (
          <div
            className="relative w-full rounded-md border border-red-600 bg-red-200 px-3 py-2 text-gray-900 dark:border-red-700/40 dark:bg-red-600/20 dark:text-gray-300"
            role="alert"
          >
            <span className="flex items-center gap-1 text-sm">
              <TriangleAlert
                className="text-gray-900 dark:text-gray-300"
                size={14}
              />{" "}
              {error}
            </span>
          </div>
        )}

        {success && <FormSuccess message={success} />}
      </div>
    </div>
  );
}
