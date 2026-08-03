import { z } from "zod";

export const createGroupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Group name is required.")
    .max(100, "Name cannot exceed 100 characters."),
  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters.")
    .optional(),
  location: z
    .string()
    .trim()
    .max(100, "Cannot exceed 100 characters.")
    .optional(),
  thumbnail_url: z.url("Must be a valid URL.").trim().optional(),
});

export const editGroupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Group name is required.")
    .max(100, "Name cannot exceed 100 characters.")
    .optional(),
  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters.")
    .optional(),
  location: z
    .string()
    .trim()
    .max(100, "Cannot exceed 100 characters.")
    .optional(),
  thumbnail_url: z.url("Must be a valid URL.").trim().optional(),
});

export const groupIdParam = z.object({
  groupId: z.coerce.number().int().positive(),
});

export type CreateGroupInput = z.infer<typeof createGroupSchema>;
export type EditGroupInput = z.infer<typeof editGroupSchema>;
