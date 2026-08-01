import pool from "../config/db";
import { UpdateProfileInput } from "../models/profile.validation";
import { ApiError } from "../utils/ApiError";

export class ProfileService {
  static async getMe(userId: number) {
    const result = await pool.query(
      `
            SELECT
            u.id,
            u.username,
            u.email,
            u.first_name,
            u.last_name,
            u.created_at,

            p.bio,
            p.location,
            p.profile_picture_url,
            p.instagram_url,
            p.youtube_url,
            p.tiktok_url,
            p.experience_level,
            p.dance_styles

            FROM users u
            LEFT JOIN profiles p
            ON u.id = p.user_id

            WHERE u.id = $1;
            `,
      [userId],
    );

    const user = result.rows[0];

    return user;
  }
  static async getUser(username: string) {
    const result = await pool.query(
      `
        SELECT 
        u.username,
        u.email,
        u.first_name,
        u.last_name,
        u.created_at,

        p.bio,
        p.location,
        p.profile_picture_url,
        p.instagram_url,
        p.youtube_url,
        p.tiktok_url,
        p.experience_level,
        p.dance_styles
        
        FROM users u
        LEFT JOIN profiles p 
        ON u.id = p.user_id

        WHERE u.username = $1;
        `,
      [username],
    );

    const user = result.rows[0];

    return user;
  }
  static async update(userId: number, data: UpdateProfileInput) {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== ""),
    );

    const {
      bio,
      location,
      profilePictureUrl,
      instagramUrl,
      youtubeUrl,
      tiktokUrl,
      experienceLevel,
      danceStyles,
    } = cleanedData;

    const result = await pool.query(
      `
        UPDATE profiles 
        SET 
        bio = COALESCE($1, bio),
        location = COALESCE($2, location),
        profile_picture_url = COALESCE($3, profile_picture_url),
        instagram_url = COALESCE($4, instagram_url),
        youtube_url = COALESCE($5, youtube_url),
        tiktok_url = COALESCE($6, tiktok_url),
        experience_level = COALESCE($7, experience_level),
        dance_styles = COALESCE($8, dance_styles),
        updated_at = NOW()

        WHERE user_id = $9
        RETURNING *;
        `,
      [
        bio,
        location,
        profilePictureUrl,
        instagramUrl,
        youtubeUrl,
        tiktokUrl,
        experienceLevel,
        danceStyles,
        userId,
      ],
    );

    return result.rows[0];
  }
}
