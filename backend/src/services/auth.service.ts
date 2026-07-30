import { LoginInput, RegisterInput } from "../models/auth.validation";
import pool from "../config/db";
import { AuthUtils } from "../utils/auth.utils";
import { ApiError } from "../utils/ApiError";

export class AuthService {
  static async createUser(data: RegisterInput) {
    const { email, username, password, firstName, lastName } = data;

    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      const existingUser = await client.query(
        `SELECT * FROM users WHERE username = $1`,
        [username],
      );

      if (existingUser.rows.length > 0) {
        throw new ApiError(409, "Username already exists.");
      }

      const hashedPassword = await AuthUtils.hashPassword(password);

      const newUser = await client.query(
        `INSERT INTO users (email, username, password_hash, first_name, last_name)
                                        VALUES ($1, $2, $3, $4, $5)
                                        RETURNING id, email, username, first_name, last_name`,
        [email ?? null, username, hashedPassword, firstName, lastName],
      );
      const user = newUser.rows[0];

      await client.query(
        `INSERT INTO profiles (user_id)
                                                VALUES ($1)    
                                                `,
        [user.id],
      );

      await client.query("COMMIT");

      const { accessToken, refreshToken } = AuthUtils.generateTokens({
        id: user.id,
      });

      return {
        user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } catch (err) {
      await client.query("ROLLBACK");
      throw err; // Note to self: caught by asyncHandler
    } finally {
      client.release();
    }
  }

  static async login(data: LoginInput) {
    const { username, password } = data;

    const existingUser = await pool.query(
      `SELECT * FROM users WHERE username = $1`,
      [username],
    );

    if (existingUser.rows.length === 0) {
      throw new ApiError(401, "No such user with username.");
    }

    const user = existingUser.rows[0];
    const verify = await AuthUtils.verifyPassword(user.password_hash, password);

    if (verify == false)
      throw new ApiError(401, "Invalid username or password.");

    const { accessToken, refreshToken } = AuthUtils.generateTokens({
      id: user.id,
    });

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      },
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
