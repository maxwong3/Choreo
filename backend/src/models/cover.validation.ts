import { z } from "zod";

export const createCoverSchema = z.object({
  project_id: z.number().int().positive().optional(),
  title: z
    .string()
    .trim()
    .min(1, "Title is required.")
    .max(100, "Title cannot exceed 100 characters."),
  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters.")
    .optional(),
  visibility: z.enum(["public", "private"]).default("public"),
  video_url: z.url("Video URL must be a valid URL.").trim(),
  thumbnail_url: z.url("Thumbnail URL must be a valid URL.").trim().optional(),
});

export const editCoverSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required.")
    .max(100, "Title cannot exceed 100 characters.")
    .optional(),
  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters.")
    .optional(),
  visibility: z.enum(["public", "private"]).optional(),

  video_url: z.url("Video URL must be a valid URL.").trim().optional(),
  thumbnail_url: z.url("Thumbnail URL must be a valid URL.").trim().optional(),
});

export type CreateCoverInput = z.infer<typeof createCoverSchema>;
export type EditCoverInput = z.infer<typeof editCoverSchema>;
