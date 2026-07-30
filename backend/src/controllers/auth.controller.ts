import { Request, Response, NextFunction } from "express";
import pool from "../config/db";
import { LoginInput, RegisterInput } from "../models/auth.validation";
import { AuthService } from "../services/auth.service";
import { AuthRequest } from "../middleware/auth.middleware";

export class AuthController {
  static async register(req: Request<{}, {}, RegisterInput>, res: Response) {
    console.log("POST /api/v1/auth/register request received.");
    console.log(req.body);
    const result = await AuthService.createUser(req.body);

    res.status(201).json(result);
  }

  static async login(
    req: Request<{}, {}, LoginInput>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      console.log("POST /api/v1/auth/login request received.");
      console.log(req.body);

      const result = await AuthService.login(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async me(req: AuthRequest, res: Response) {
    res.json({
      message: "You're authenticated!",
      user: req.user,
    });
  }
}
