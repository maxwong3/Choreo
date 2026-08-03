import pool from "../config/db";
import {
  AddMemberInput,
  UpdateMemberRoleInput,
  groupIdParam,
  groupMemberParam,
} from "../models/group-member.validation";
import { ApiError } from "../utils/ApiError";

export class GroupMemberService {
  static async getMembers(groupId: number) {
    const group = await pool.query(
      `
      SELECT id
      FROM groups
      WHERE id = $1
      `,
      [groupId],
    );

    if (group.rows.length === 0) throw new ApiError(404, "Group not found.");

    const members = await pool.query(
      `
        SELECT 
        gm.group_id,
        gm.user_id,
        gm.role,
        gm.joined_at,

        u.username,
        u.first_name,
        u.last_name,

        p.profile_picture_url,
        p.bio

        FROM group_members gm

        LEFT JOIN users u
        ON gm.user_id = u.id
        LEFT JOIN profiles p
        ON p.user_id = gm.user_id

        WHERE gm.group_id = $1
      `,
      [groupId],
    );

    return members.rows;
  }
  static async addMember(
    groupId: number,
    requesterId: number,
    addedMemberId: number,
  ) {
    const group = await pool.query(
      `
      SELECT id
      FROM groups
      WHERE id = $1
      `,
      [groupId],
    );

    if (group.rows.length === 0) throw new ApiError(404, "Group not found.");

    if (requesterId !== addedMemberId) {
      const permission = await pool.query(
        `
        SELECT role 
        FROM group_members
        WHERE group_id = $1
        AND user_id = $2;
        `,
        [groupId, requesterId],
      );

      const role = permission.rows[0]?.role;

      if (role !== "moderator" && role !== "leader") {
        throw new ApiError(403, "Not authorized to do this transaction.");
      }
    }
    const result = await pool.query(
      `
        INSERT INTO group_members (
          group_id, user_id, role
        ) VALUES ($1, $2, 'member')
         RETURNING *;
        `,
      [groupId, addedMemberId],
    );

    return result.rows[0];
  }
  static async deleteMember(
    groupId: number,
    requesterId: number,
    targetId: number,
  ) {
    // Check group exists
    const group = await pool.query(
      `
      SELECT id
      FROM groups
      WHERE id = $1
      `,
      [groupId],
    );

    if (group.rows.length === 0) {
      throw new ApiError(404, "Group not found.");
    }

    // Removing someone else
    if (requesterId !== targetId) {
      const permission = await pool.query(
        `
        SELECT role
        FROM group_members
        WHERE group_id = $1
        AND user_id = $2;
        `,
        [groupId, requesterId],
      );
      const targetPermission = await pool.query(
        `
        SELECT role
        FROM group_members
        WHERE group_id = $1
        AND user_id = $2;
        `,
        [groupId, targetId],
      );

      const role = permission.rows[0]?.role;

      const targetRole = targetPermission.rows[0]?.role;

      if (role !== "moderator" && role !== "leader") {
        throw new ApiError(403, "Not authorized to remove members.");
      }

      if (
        (role === "moderator" && targetRole === "moderator") ||
        (role === "moderator" && targetRole === "leader")
      ) {
        throw new ApiError(
          403,
          "Cannot remove members with equal or higher privileges.",
        );
      }
    }

    const result = await pool.query(
      `
      DELETE FROM group_members
      WHERE group_id = $1
      AND user_id = $2
      RETURNING *;
      `,
      [groupId, targetId],
    );

    if (result.rows.length === 0) {
      throw new ApiError(404, "Member not found.");
    }

    return result.rows[0];
  }
  static async editMember(
    groupId: number,
    requesterId: number,
    targetId: number,
    data: UpdateMemberRoleInput,
  ) {
    const { role } = data;

    const group = await pool.query(
      `
  SELECT id
  FROM groups
  WHERE id = $1
  `,
      [groupId],
    );

    if (group.rows.length === 0) {
      throw new ApiError(404, "Group not found.");
    }

    const permission = await pool.query(
      `
    SELECT role
    FROM group_members
    WHERE group_id = $1
    AND user_id = $2;
    `,
      [groupId, requesterId],
    );

    const requesterRole = permission.rows[0]?.role;

    if (requesterRole !== "leader") {
      throw new ApiError(403, "Only leaders can edit member roles.");
    }

    const target = await pool.query(
      `
    SELECT role
    FROM group_members
    WHERE group_id = $1
    AND user_id = $2;
    `,
      [groupId, targetId],
    );

    const targetRole = target.rows[0]?.role;

    if (!targetRole) {
      throw new ApiError(404, "Member not found.");
    }

    const result = await pool.query(
      `
    UPDATE group_members
    SET role = $1
    WHERE group_id = $2
    AND user_id = $3
    RETURNING *;
    `,
      [role, groupId, targetId],
    );

    return result.rows[0];
  }
}
