import { Request, Response, NextFunction } from "express";
import pool from "../config/db"
import {
    LoginInput,
    RegisterInput,
} from "../models/auth.validation"
import { AuthService } from "../services/auth.service"

export class AuthController {

    /* Old test route: do not use
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
    */
    
    static async register (
        req: Request<{}, {}, RegisterInput>,
        res: Response,
    ) {
        console.log("POST /api/v1/auth/register request received.");
        console.log(req.body);
        const user = await AuthService.createUser(req.body);

        res.status(201).json(user);
    }
    static async login (
        req: Request<{}, {}, LoginInput>,
        res: Response,
    ) {
        console.log("POST /api/v1/auth/login request received.");
        console.log(req.body);

        const user = await AuthService.login(req.body);

        res.status(200).json({message: "Login successful", user});
    }
}