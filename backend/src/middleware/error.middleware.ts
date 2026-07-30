import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response, 
    next: NextFunction
) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json(err.toJSON());
    }

    // Unexpected error 
    console.error(err);

    return res.status(500).json(new ApiError(500, "Internal server error").toJSON());
}