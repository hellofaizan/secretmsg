"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { messageSchema } from "@/schemas";
import { FormSuccess } from "@/components/FormSuccess";
import { CircleAlert, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import SendMessage from "@/actions/sendmessage";

type formValues = z.infer<typeof messageSchema>;

export default function MessageForm(user: any) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty },
  } = useForm<formValues>({
    resolver: zodResolver(messageSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: formValues) => {
    setDisabled(true);
    setLoading(true);
    setError(null);
    setSuccess(null);

    await SendMessage({
      message: data.message,
      userId: user.user.id,
      ip: user.ip,
    }).then((res) => {
      try {
        if (res && res.error) {
          setError(res.error || "An error occurred");
        } else {
          setSuccess(res.success ?? "Message sent successfully");
        }
      } finally {
        setLoading(false);
        setDisabled(false);
        reset();
      }
    });
  };

  React.useEffect(() => {
    if (isDirty) {
      setDisabled(false);
    }
  }, [isDirty]);

  return (
    <div className="flex w-full flex-col pb-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-4 flex flex-col gap-3"
      >
        <Textarea
          placeholder="Write down your secret message"
          className="w-full"
          rows={8}
          {...register("message")}
        />
        <Button
          type="submit"
          className="flex h-12 w-full gap-1"
          disabled={disabled}
        >
          {loading && <Loader className="animate-spin" size={16} />}
          {!loading ? "Send Message" : "Sending..."}
        </Button>
      </form>
      {errors && (
        <div
          className={errors.message ? "flex w-full flex-col gap-1" : "hidden"}
        >
          {errors.message && (
            <div
              className="relative w-full rounded-md border border-red-600/45 bg-red-100/45 px-3 py-2 text-gray-900"
              role="alert"
            >
              <span className="flex flex-col text-xs">
                {errors.message.message}
              </span>
            </div>
          )}
        </div>
      )}

      {error && (
        <div
          className="relative w-full rounded-md border border-red-600/45 bg-red-100/45 px-3 py-2 text-gray-900"
          role="alert"
        >
          <span className="flex items-center gap-1 text-sm">
            <CircleAlert
              className="text-gray-900 dark:text-gray-300"
              size={14}
            />{" "}
            {error}
          </span>
        </div>
      )}

      {success && <FormSuccess message={success} />}
    </div>
  );
}
