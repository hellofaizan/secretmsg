"use client";
"use cache";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleAlert, Loader } from "lucide-react";
import { FormSuccess } from "@/components/FormSuccess";
import { updateUnameSchema } from "@/schemas";
import UpdateUsername from "@/actions/updateusername";
import { useRouter, useSearchParams } from "next/navigation";

type formValues = z.infer<typeof updateUnameSchema>;

export default function ChangeUsername(user: any) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  const username = searchParams.get("u") || "";

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm<formValues>({
    resolver: zodResolver(updateUnameSchema),
    mode: "onChange",
    defaultValues: {
      username: user.user.username || username,
    },
  });

  const onSubmit = async (data: formValues) => {
    setDisabled(true);
    setLoading(true);
    setError(null);
    setSuccess(null);

    // TODO: Call your API here
    await UpdateUsername(data.username).then((res) => {
      try {
        if (res && res.error) {
          setError(res.error || "An error occurred");
        } else {
          setSuccess(res.success ?? "Email sent successfully");
        }
      } finally {
        setLoading(false);
        setDisabled(false);
        router.refresh();
      }
    });
  };

  React.useEffect(() => {
    if (username) {
      setDisabled(false);
    }
    if (isDirty) {
      setDisabled(false);
    }
  }, [isDirty]);

  return (
    <div className="flex flex-col gap-4 rounded-lg border" id="username">
      <div className="flex flex-col gap-1 bg-muted/50 px-4 py-4">
        <p className="text-xl font-semibold">Username</p>
        <p className="text-sm text-muted-foreground">
          Choose your Username uniquely, Can be changed only once a week
        </p>
      </div>
      <div className="flex flex-col p-2 px-4 pb-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 flex flex-col gap-3 md:flex-row"
        >
          <input
            id="username"
            type={"text"}
            placeholder="Type username"
            className="w-full rounded-md border p-2 px-3 pr-8 focus:border-muted-foreground focus:outline-none"
            {...register("username")}
          />
          <Button
            type="submit"
            className="flex w-max gap-1"
            disabled={disabled}
          >
            {loading && <Loader className="animate-spin" size={16} />}
            {!loading ? (username ? "Set Username" : "Change") : "Changing..."}
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
