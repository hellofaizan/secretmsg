"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { messageSchema } from "@/schemas";
import { FormSuccess } from "@/components/FormSuccess";
import { CircleAlert, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import SendMessage from "@/actions/sendmessage";
import ShuffleBtn from "./shuffle";
import ShareProfile from "./shareprofile";

type formValues = z.infer<typeof messageSchema>;

export default function MessageForm(user: any) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [value, setValue] = useState("");

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
        setValue("");
      }
    });
  };

  const handleShuffle = (newValue: string) => {
    setValue(newValue);
    reset({ message: newValue });
  };

  if (value) {
  }

  React.useEffect(() => {
    if (isDirty) {
      setDisabled(false);
    }
  }, [isDirty]);

  return (
    <div className="flex w-full flex-col pb-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-1 flex flex-col gap-3 mx-[2px]"
      >
        <div className="flex w-full flex-col overflow-hidden rounded-2xl border">
          <div className="flex items-center justify-between border-b px-4 py-[10px]">
            <div className="text-sm font-mono font-medium">
              Sending Message to{" "}
              <span className="text-base font-bold">{user.user.name}</span>
            </div>
            <ShareProfile username={user?.username} />
          </div>
          <div className="relative">
            <Textarea
              placeholder="Type your anonymous confession..."
              className="w-full"
              rows={8}
              {...register("message")}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <ShuffleBtn setValue={handleShuffle} />
          </div>
        </div>

        <p className="-mt-3 text-xs italic md:text-sm">
          <span className="text-base text-red-500">*</span>
          {user.user.name} will never know who sent the message <span className="not-italic">🔒</span>
        </p>

        <motion.button
          type="submit"
          className="flex h-12 w-full items-center justify-center gap-1 rounded-2xl bg-[#e73336]/90 text-white hover:bg-[#e73336] disabled:opacity-50"
          disabled={disabled}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          data-umami-event={`anonymous-confessions`}
        >
          {loading && <Loader className="animate-spin" size={16} />}
          {!loading ? "Send Anonymously" : "Sending..."}
        </motion.button>
      </form>
      {errors && (
        <div
          className={errors.message ? "flex w-full flex-col gap-1" : "hidden"}
        >
          {errors.message && (
            <div
              className="relative w-full rounded-2xl border border-red-600/45 bg-red-100/45 px-3 py-2 text-gray-900"
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
          className="relative w-full rounded-2xl border border-red-600/45 bg-red-100/45 px-3 py-2 text-gray-900"
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
