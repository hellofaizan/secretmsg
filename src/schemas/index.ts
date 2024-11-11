import * as z from "zod";

export const waitlist = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});

export const updateUnameSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters",
    })
    .max(20, {
      message: "Username must be at most 20 characters",
    })
    .regex(/^[a-zA-Z0-9._-]+$/, {
      message:
        "Username can only contain letters, numbers, periods, hyphens, and underscores",
    }),
});

export const messageSchema = z.object({
  message: z.string().min(3, {
    message: "Message must be at least 3 characters",
  }),
});
