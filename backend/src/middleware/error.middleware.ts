import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { ZodError } from "zod";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(err.toJSON());
  }
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Data validation failed.",
      errors: err.issues,
    });
  }

  // Unexpected error
  console.error(err);

  return res
    .status(500)
    .json(new ApiError(500, "Internal server error").toJSON());
}
