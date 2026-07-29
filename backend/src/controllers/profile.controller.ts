import { Request, Response, NextFunction } from "express";
import { ProfileService } from "../services/profile.service";
import { AuthRequest } from "../middleware/auth.middleware";
import { ApiError } from "../utils/ApiError";

export class ProfileController {
    static async getMe (
        req: AuthRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            if (!req.user) throw new ApiError(401, "Unauthorized here");
            const profile = await ProfileService.getMe(req.user.id);

            res.status(200).json(profile);
        } catch (err) {
            next(err);
        }
    }
}