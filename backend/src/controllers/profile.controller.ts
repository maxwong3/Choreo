import { Request, Response, NextFunction } from "express";
import { ProfileService } from "../services/profile.service";
import { AuthRequest } from "../middleware/auth.middleware";
import { ApiError } from "../utils/ApiError";
import { UpdateProfileInput } from "../models/profile.validation";

interface UserParams {
  username: string;
}

interface UpdateProfileRequest extends AuthRequest {
  body: UpdateProfileInput;
}

export class ProfileController {
  static async getMe(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      const profile = await ProfileService.getMe(req.user.id);

      res.status(200).json(profile);
    } catch (err) {
      next(err);
    }
  }
  static async getUser(
    req: Request<UserParams>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { username } = req.params;

      const profile = await ProfileService.getUser(username);

      if (!profile) {
        throw new ApiError(404, "User not found.");
      }

      res.status(200).json(profile);
    } catch (err) {
      next(err);
    }
  }
  static async update(
    req: UpdateProfileRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const profile = await ProfileService.update(req.user!.id, req.body);

      res.status(200).json(profile);
    } catch (err) {
      next(err);
    }
  }
}
