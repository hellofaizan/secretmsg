"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader, User } from "lucide-react";
import UpdateProfile from "@/actions/updateprofile";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const updateData = z.object({
  name: z.string(),
  email: z.string(),
  bio: z.string(),
});

type formValues = z.infer<typeof updateData>;

export default function PersonalData(user: any) {
  const userdata = user.user;
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm<formValues>({
    resolver: zodResolver(updateData),
    mode: "onChange",
    defaultValues: {
      name: userdata.name,
      email: userdata.email,
      bio: userdata.about,
    },
  });

  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const onSubmit = async (data: formValues) => {
    setLoading(true);
    await UpdateProfile(data)
      .then((res: any) => {
        if (res.error) {
          toast(res.error);
        } else {
          toast(res.success);
        }
      })
      .catch(() => {
        toast.error("An error occurred while updating your profile");
      })
      .finally(() => {
        setLoading(false);
        router.refresh();
      });
  };

  React.useEffect(() => {
    if (formState.isDirty) {
      setDisabled(false);
    }
  }, [formState.isDirty]);

  return (
    <div className="flex flex-col gap-4 rounded-lg border">
      <div className="flex flex-col gap-1 bg-muted/50 px-4 py-4">
        <p className="text-xl font-semibold">Personal Data</p>
        <p className="text-sm text-muted-foreground">
          Your personal information is not shared with anyone.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2 px-4">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">Name</p>
            <input
              className="rounded-md border p-1 px-2 text-lg focus:border-muted-foreground focus:outline-none"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-2 md:flex-row">
            <div className="flex w-full flex-col gap-1">
              <p className="text-sm text-muted-foreground">Email</p>
              <input
                className="rounded-md border p-1 px-2 text-lg focus:border-muted-foreground focus:outline-none"
                type="email"
                placeholder="Email"
                disabled
                {...register("email")}
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <p className="text-sm text-muted-foreground">Account ID</p>
              <input
                className="rounded-md border p-1 px-2 text-lg focus:border-muted-foreground focus:outline-none"
                type="text"
                placeholder="User Id"
                disabled
                value={userdata.id}
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-2 md:flex-row">

            <div className="flex w-full flex-col gap-1">
              <p className="text-sm text-muted-foreground">Account ID</p>
              <Textarea
                placeholder="Short and sweet bio"
                className="w-full"
                rows={5}
                {...register("bio")}
              />
            </div>
          </div>

          <Button
            className="mb-4 mt-4 flex w-max gap-1"
            type="submit"
            disabled={disabled || loading}
          >
            {loading && <Loader className="animate-spin" size={15} />}
            {loading ? "Updating" : "Update Data"}
          </Button>
        </form>
      </div>
    </div>
  );
}
