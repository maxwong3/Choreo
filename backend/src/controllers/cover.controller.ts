import { Request, Response, NextFunction } from "express";
import { CoverService } from "../services/cover.service";
import { AuthRequest } from "../middleware/auth.middleware";
import { ApiError } from "../utils/ApiError";
import { CreateCoverInput, EditCoverInput } from "../models/cover.validation";

interface CreateCoverRequest extends AuthRequest {
  body: CreateCoverInput;
}

interface EditCoverRequest extends AuthRequest {
  body: EditCoverInput;
}

export class CoverController {
  static async createCover(
    req: CreateCoverRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user) {
        throw new ApiError(401, "Unauthorized.");
      }

      const cover = await CoverService.createCover(req.user.id, req.body);

      res.status(201).json(cover);
    } catch (err) {
      next(err);
    }
  }

  static async getCover(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const cover = await CoverService.getCover(Number(req.params.id));

      res.status(200).json(cover);
    } catch (err) {
      next(err);
    }
  }

  static async getCoversByUser(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const covers = await CoverService.getUserCovers(
        Number(req.params.userId),
      );

      res.status(200).json(covers);
    } catch (err) {
      next(err);
    }
  }

  static async editCover(
    req: EditCoverRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user) {
        throw new ApiError(401, "Unauthorized.");
      }

      const cover = await CoverService.editCover(
        req.user.id,
        Number(req.params.id),
        req.body,
      );

      res.status(200).json(cover);
    } catch (err) {
      next(err);
    }
  }

  static async deleteCover(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user) {
        throw new ApiError(401, "Unauthorized.");
      }

      await CoverService.deleteCover(req.user.id, Number(req.params.id));

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
