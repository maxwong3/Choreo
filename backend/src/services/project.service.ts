import pool from "../config/db";
import {
  CreateProjectInput,
  EditProjectInput,
} from "../models/project.validation";
import { ApiError } from "../utils/ApiError";

export class ProjectService {
  static async createProject(userId: number, data: CreateProjectInput) {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");

      const {
        title,
        song,
        artist,
        description,
        visibility,
        member_limit,
        start_date,
        end_date,
        leading_style,
        audition_criteria,
        looking_for,
      } = data;

      const result = await client.query(
        `
      INSERT INTO projects (
        leader_id,
        title,
        song,
        artist,
        description,
        visibility,
        member_limit,
        start_date,
        end_date,
        leading_style,
        audition_criteria,
        looking_for
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7,
        $8, $9, $10, $11, $12
      )
      RETURNING *;
      `,
        [
          userId,
          title,
          song ?? null,
          artist ?? null,
          description ?? null,
          visibility,
          member_limit ?? null,
          start_date ?? null,
          end_date ?? null,
          leading_style ?? null,
          audition_criteria ?? null,
          looking_for ?? null,
        ],
      );

      const project = result.rows[0];

      await client.query(
        `
      INSERT INTO project_members (
        project_id,
        user_id,
        role
      )
      VALUES ($1, $2, $3)
      `,
        [project.id, userId, "leader"],
      );
      await client.query("COMMIT");

      return project;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  }
  static async getProject(projectId: number) {
    const result = await pool.query(
      `
      SELECT 
      u.username,
      u.first_name,
      u.last_name,

      p.id,
      p.title,
      p.song,
      p.artist,
      p.description,
      p.visibility,
      p.member_limit,
      p.start_date,
      p.end_date,
      p.leading_style,
      p.audition_criteria,
      p.looking_for,
      p.status,
      p.created_at,
      p.updated_at

      FROM projects p
      INNER JOIN users u
      ON p.leader_id = u.id

      WHERE p.id = $1;
      `,
      [projectId],
    );
    const project = result.rows[0];
    if (!project) throw new ApiError(404, "Project not found.");
    return project;
  }
  static async getUserProjects(userId: number) {
    const result = await pool.query(
      `
      SELECT 
      p.id,
      p.title,
      p.song,
      p.artist,
      p.description,
      p.visibility,
      p.member_limit,
      p.start_date,
      p.end_date,
      p.leading_style,
      p.audition_criteria,
      p.looking_for,
      p.status,
      p.created_at,
      p.updated_at

      FROM projects p
      INNER JOIN project_members m
      ON p.id = m.project_id

      WHERE m.user_id = $1
      ORDER BY p.created_at DESC;
      `,
      [userId],
    );
    return result.rows;
  }
  static async editProject(
    userId: number,
    projectId: number,
    data: EditProjectInput,
  ) {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== ""),
    ) as EditProjectInput;

    if (Object.keys(cleanedData).length === 0)
      throw new ApiError(400, "No fields to update.");

    const {
      title,
      song,
      artist,
      description,
      visibility,
      member_limit,
      start_date,
      end_date,
      leading_style,
      audition_criteria,
      looking_for,
    } = cleanedData;

    const result = await pool.query(
      `
  UPDATE projects
  SET
    title = COALESCE($1, title),
    song = COALESCE($2, song),
    artist = COALESCE($3, artist),
    description = COALESCE($4, description),
    visibility = COALESCE($5, visibility),
    member_limit = COALESCE($6, member_limit),
    start_date = COALESCE($7, start_date),
    end_date = COALESCE($8, end_date),
    leading_style = COALESCE($9, leading_style),
    audition_criteria = COALESCE($10, audition_criteria),
    looking_for = COALESCE($11, looking_for),
    updated_at = NOW()

  WHERE id = $12
  AND (
    leader_id = $13
    OR EXISTS (
      SELECT 1
      FROM project_members pm
      WHERE pm.project_id = projects.id
      AND pm.user_id = $13
      AND pm.role = 'moderator'
    )
  )

  RETURNING *;
  `,
      [
        title,
        song,
        artist,
        description,
        visibility,
        member_limit,
        start_date,
        end_date,
        leading_style,
        audition_criteria,
        looking_for,
        projectId,
        userId,
      ],
    );

    const project = result.rows[0];
    if (!project) throw new ApiError(404, "Project not found or unauthorized.");
    return project;
  }
  static async deleteProject(userId: number, projectId: number) {
    const result = await pool.query(
      `
      DELETE FROM projects
      WHERE id = $1
      AND leader_id = $2
      RETURNING *;
      `,
      [projectId, userId],
    );

    const project = result.rows[0];
    if (!project) throw new ApiError(404, "Project not found or unauthorized");
    return project;
  }
}
