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
    }),
});
