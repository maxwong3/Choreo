import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { ApiError } from "../utils/ApiError";
import { ProjectService } from "../services/project.service";
import {
  CreateProjectInput,
  EditProjectInput,
} from "../models/project.validation";

interface CreateProjectRequest extends AuthRequest {
  body: CreateProjectInput;
}

interface EditProjectRequest extends AuthRequest {
  body: EditProjectInput;
}

export class ProjectController {
  static async createProject(
    req: CreateProjectRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      const project = await ProjectService.createProject(req.user.id, req.body);

      res.status(201).json(project);
    } catch (err) {
      next(err);
    }
  }
  static async getProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await ProjectService.getProject(Number(req.params.id));

      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }
  static async getUserProjects(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      const projects = await ProjectService.getUserProjects(req.user.id);

      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  }
  static async editProject(
    req: EditProjectRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      const project = await ProjectService.editProject(
        req.user.id,
        Number(req.params.id),
        req.body,
      );

      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }
  static async deleteProject(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const projectId = Number(req.params.id);
      if (isNaN(projectId)) {
        throw new ApiError(400, "Invalid project ID.");
      }
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      await ProjectService.deleteProject(req.user.id, projectId);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
