import { z } from "zod";

export const createProjectSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Title is required.")
      .max(100, "Title cannot exceed 100 characters."),
    song: z
      .string()
      .trim()
      .max(100, "Song title cannot exceed 100 characters.")
      .optional(),
    artist: z
      .string()
      .trim()
      .max(100, "Song artist cannot exceed 100 characters.")
      .optional(),
    description: z
      .string()
      .trim()
      .max(500, "Project description cannot exceed 500 characters.")
      .optional(),
    visibility: z.enum(["public", "private"]),
    member_limit: z
      .number()
      .int()
      .min(1, "Minimum 1 member.")
      .max(1000, "Maximum 1000 members.")
      .optional(),
    start_date: z.coerce.date().optional(),
    end_date: z.coerce.date().optional(),
    leading_style: z.string().trim().max(300, "Max 300 characters.").optional(),
    audition_criteria: z
      .string()
      .trim()
      .max(300, "Max 300 characters.")
      .optional(),
    looking_for: z.string().trim().max(300, "Max 300 characters.").optional(),
  })
  .refine(
    (data) =>
      !data.start_date || !data.end_date || data.end_date >= data.start_date,
    {
      message: "End date must be after the start date.",
      path: ["end_date"],
    },
  );

export const editProjectSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Title is required.")
      .max(100, "Title cannot exceed 100 characters.")
      .optional(),
    song: z
      .string()
      .trim()
      .max(100, "Song title cannot exceed 100 characters.")
      .optional(),
    artist: z
      .string()
      .trim()
      .max(100, "Song artist cannot exceed 100 characters.")
      .optional(),
    description: z
      .string()
      .trim()
      .max(500, "Project description cannot exceed 500 characters.")
      .optional(),
    visibility: z.enum(["public", "private"]).optional(),
    member_limit: z
      .number()
      .int()
      .min(1, "Minimum 1 member.")
      .max(1000, "Maximum 1000 members.")
      .optional(),
    start_date: z.coerce.date().optional(),
    end_date: z.coerce.date().optional(),
    leading_style: z.string().trim().max(300, "Max 300 characters.").optional(),
    audition_criteria: z
      .string()
      .trim()
      .max(300, "Max 300 characters.")
      .optional(),
    looking_for: z.string().trim().max(300, "Max 300 characters.").optional(),
  })
  .refine(
    (data) =>
      !data.start_date || !data.end_date || data.end_date >= data.start_date,
    {
      message: "End date must be after the start date.",
      path: ["end_date"],
    },
  );

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type EditProjectInput = z.infer<typeof editProjectSchema>;
