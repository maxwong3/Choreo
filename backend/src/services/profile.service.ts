import pool from "../config/db";
import { AuthRequest } from "../middleware/auth.middleware";

export class ProfileService {
    static async getMe(userId: number) {
        const user = await pool.query(`
            SELECT * FROM users
            WHERE id = $1
            `, [userId]);
        console.log(user);
        return user;
    }
}