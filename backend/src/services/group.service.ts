import pool from "../config/db";
import { CreateGroupInput, EditGroupInput } from "../models/group.validation";
import { ApiError } from "../utils/ApiError";

export class GroupService {
  static async createGroup(userId: number, data: CreateGroupInput) {
    const client = await pool.connect();
    try {
      client.query("BEGIN");

      const { name, description, location, thumbnail_url } = data;

      const groupResult = await client.query(
        `
          INSERT INTO groups (
            name, description, location, thumbnail_url
          ) VALUES ($1, $2, $3, $4)
          RETURNING *;
        `,
        [name, description, location, thumbnail_url],
      );

      const group = groupResult.rows[0];

      const result = await client.query(
        `
          INSERT INTO group_members (
            group_id, user_id, role
          ) VALUES ($1, $2, $3)
          RETURNING *;
        `,
        [group.id, userId, "leader"],
      );

      client.query("COMMIT");

      return group;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      await client.release();
    }
  }
  static async getGroup(groupId: number) {
    const result = await pool.query(
      `
        SELECT
        g.id,
        g.name,
        g.description,
        g.location,
        g.thumbnail_url,
        COUNT(gm.user_id)::INT AS member_count
        FROM groups g
        LEFT JOIN group_members gm
            ON g.id = gm.group_id
        WHERE g.id = $1
        GROUP BY
        g.id,
        g.name,
        g.description,
        g.location,
        g.thumbnail_url;
      `,
      [groupId],
    );

    const group = result.rows[0];

    if (!group) throw new ApiError(404, "Group not found.");

    return group;
  }
  static async getMyGroups(userId: number) {
    const result = await pool.query(
      `
        SELECT 
        g.id,
        g.name,
        g.description,
        g.location,
        g.thumbnail_url,

        gm.user_id,
        gm.role,
        gm.joined_at

        FROM groups g
        INNER JOIN group_members gm
        ON g.id = gm.group_id
        WHERE gm.user_id = $1

        ORDER BY gm.joined_at DESC;
      `,
      [userId],
    );

    return result.rows;
  }
  static async editGroup(
    userId: number,
    groupId: number,
    data: EditGroupInput,
  ) {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== ""),
    ) as EditGroupInput;

    if (Object.keys(cleanedData).length === 0)
      throw new ApiError(400, "No fields to update.");

    const { name, description, location, thumbnail_url } = cleanedData;

    const result = await pool.query(
      `
      UPDATE groups 
      SET 
        name = COALESCE($1, name),
        description = COALESCE($2, description),
        location = COALESCE($3, location),
        thumbnail_url = COALESCE($4, thumbnail_url)

      WHERE id = $5
      AND EXISTS (
        SELECT 1 
        FROM group_members gm
        WHERE gm.group_id = $5
        AND gm.user_id = $6
        AND gm.role IN ('leader', 'moderator')
      )
      RETURNING *;
    `,
      [name, description, location, thumbnail_url, groupId, userId],
    );

    const group = result.rows[0];

    if (!group) throw new ApiError(404, "Group not found or unauthorized.");

    return group;
  }
  static async deleteGroup(userId: number, groupId: number) {
    const result = await pool.query(
      `
      DELETE FROM groups
      WHERE id = $1
      AND EXISTS (
        SELECT 1
        FROM group_members gm
        WHERE gm.group_id = $1
        AND gm.user_id = $2
        AND gm.role IN ('leader')
      )
      RETURNING *;
      `,
      [groupId, userId],
    );

    const group = result.rows[0];

    if (!group) throw new ApiError(404, "Group not found or unauthorized.");

    return group;
  }
}
