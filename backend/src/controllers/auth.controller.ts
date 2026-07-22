import { Request, Response, NextFunction } from "express";
import pool from "../config/db"

export class AuthController {

    static async testroute (req: Request, res: Response) {
        try {
            const result = await pool.query("SELECT NOW();");

            res.status(200).json({
                status: "Database connected through controller.",
                time: result.rows[0].now
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                status: "Database connection failed."
            });
        }
        }
    static async register (
        req: Request,
        res: Response,
        next: NextFunction
    ) {

    }
    static async login (
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        
    }
    static async refreshToken (
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        
    }
}