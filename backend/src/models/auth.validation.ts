import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .union([z.email("Please provide a valid email address."), z.literal("")])
    .optional(),
  username: z.string().min(3, "Username too short."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export const loginSchema = z.object({
  username: z.string().min(3, "Username too short."),
  password: z.string().min(1, "Password is required."),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
