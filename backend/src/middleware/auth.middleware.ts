import { Request, Response, NextFunction } from "express";
import { AuthUtils } from "../utils/auth.utils";

export interface AuthRequest extends Request {
    user?: {
        id: number;
    };
}

const extractToken = (authHeader?: string): string | null => {
    if (!authHeader) return null;
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") return null;
    return parts[1];
}

export const authenticate = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = extractToken(req.headers.authorization);

        if (!token) {
            return res.status(401).json({
                message: "Authentication token required."
            });
        }

        const payload = AuthUtils.verifyAccessToken(token);

        if (!payload) {
            return res.status(401).json({
                message: "Invalid or expired token."
            });
        }

        req.user = {
            id: payload.id,
        };

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Authentication failed"
        });
    }
}
