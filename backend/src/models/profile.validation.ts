import { z } from "zod";

export const updateProfileSchema = z.object({
  bio: z.string().max(500, "Bio cannot exceed 500 characters.").optional(),
  location: z.string().max(100, "Cannot exceed 100 characters.").optional(),
  profilePictureUrl: z.url("Must be a valid URL.").optional(),
  instagramUrl: z.url("Must be a valid URL.").optional(),
  youtubeUrl: z.url("Must be a valid URL.").optional(),
  tiktokUrl: z.url("Must be a valid URL.").optional(),
  experienceLevel: z
    .enum(["beginner", "intermediate", "advanced", "professional"])
    .optional(),
  danceStyles: z.array(z.string()).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
