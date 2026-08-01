import { Request, Response, NextFunction } from "express";
// import { CoverService } from "../services/cover.service";
import { AuthRequest } from "../middleware/auth.middleware";
import { ApiError } from "../utils/ApiError";

export class CoverController {
  static async createCover(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {}
  static async getCover() {}
  static async getCoversByUser() {}
  static async editCover() {}
  static async deleteCover() {}
}
