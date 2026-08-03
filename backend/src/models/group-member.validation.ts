import { z } from "zod";

export const addMemberSchema = z.object({
  userId: z.coerce.number().int().positive(),
});

export const updateMemberRoleSchema = z.object({
  role: z.enum(["member", "moderator", "leader"]),
});

export const groupIdParam = z.object({
  groupId: z.coerce.number().int().positive(),
});

// If a moderator is affecting another user
export const groupMemberParam = z.object({
  userId: z.coerce.number().int().positive(),
});

export type AddMemberInput = z.infer<typeof addMemberSchema>;
export type UpdateMemberRoleInput = z.infer<typeof updateMemberRoleSchema>;
