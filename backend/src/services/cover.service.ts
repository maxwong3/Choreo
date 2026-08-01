import pool from "../config/db";
import { CreateCoverInput, EditCoverInput } from "../models/cover.validation";
import { ApiError } from "../utils/ApiError";

export class CoverService {
  static async createCover(userId: number, data: CreateCoverInput) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const {
        project_id,
        title,
        description,
        visibility,
        video_url,
        thumbnail_url,
      } = data;

      if (project_id) {
        const existingCover = await client.query(
          `
          SELECT id
          FROM covers
          WHERE project_id = $1
          `[project_id],
        );

        if (existingCover.rows.length > 0) {
          throw new ApiError(409, "This project already has a cover.");
        }
      }

      const coverResult = await client.query(
        `
      INSERT INTO covers (
        creator_id,
        project_id,
        title,
        description,
        visibility,
        video_url,
        thumbnail_url
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *;
      `,
        [
          userId,
          project_id ?? null,
          title,
          description ?? null,
          visibility,
          video_url,
          thumbnail_url ?? null,
        ],
      );

      const cover = coverResult.rows[0];

      await client.query(
        `
      INSERT INTO cover_members (
        cover_id,
        user_id,
        role
      )
      VALUES ($1,$2,$3);
      `,
        [cover.id, userId, "creator"],
      );

      await client.query("COMMIT");

      return cover;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  }

  static async getCover(coverId: number) {
    const result = await pool.query(
      `
      SELECT
        c.id,
        c.title,
        c.description,
        c.visibility,
        c.video_url,
        c.thumbnail_url,
        c.published_at,

        u.username,
        u.first_name,
        u.last_name

      FROM covers c

      INNER JOIN users u
        ON c.creator_id = u.id

      WHERE c.id = $1;
      `,
      [coverId],
    );

    const cover = result.rows[0];

    if (!cover) {
      throw new ApiError(404, "Cover not found.");
    }

    return cover;
  }

  static async getUserCovers(userId: number) {
    const result = await pool.query(
      `
      SELECT
        c.id,
        c.title,
        c.description,
        c.visibility,
        c.video_url,
        c.thumbnail_url,
        c.published_at,

        u.username AS creator_username,
        u.first_name AS creator_first_name,
        u.last_name AS creator_last_name

      FROM covers c

      INNER JOIN cover_members cm
      ON c.id = cm.cover_id

      INNER JOIN users u
      ON c.creator_id = u.id

      INNER JOIN users member
      ON cm.user_id = member.id

      WHERE member.id = $1

      ORDER BY c.published_at DESC;
      `,
      [userId],
    );

    return result.rows;
  }

  static async editCover(
    userId: number,
    coverId: number,
    data: EditCoverInput,
  ) {
    const { title, description, visibility, video_url, thumbnail_url } = data;

    const result = await pool.query(
      `
    UPDATE covers
    SET
      title = COALESCE($1, title),
      description = COALESCE($2, description),
      visibility = COALESCE($3, visibility),
      video_url = COALESCE($4, video_url),
      thumbnail_url = COALESCE($5, thumbnail_url)

    WHERE id = $6
    AND EXISTS (
      SELECT 1
      FROM cover_members cm
      WHERE cm.cover_id = covers.id
      AND cm.user_id = $7
      AND cm.role IN ('creator', 'moderator')
    )

    RETURNING *;
    `,
      [
        title,
        description,
        visibility,
        video_url,
        thumbnail_url,
        coverId,
        userId,
      ],
    );

    const cover = result.rows[0];

    if (!cover) throw new ApiError(404, "Cover not found or unauthorized.");

    return cover;
  }

  static async deleteCover(userId: number, coverId: number) {
    const result = await pool.query(
      `
      DELETE FROM covers

      WHERE id = $1
      AND creator_id = $2

      RETURNING *;
      `,
      [coverId, userId],
    );

    const cover = result.rows[0];

    if (!cover) {
      throw new ApiError(404, "Cover not found or unauthorized.");
    }

    return cover;
  }
}
