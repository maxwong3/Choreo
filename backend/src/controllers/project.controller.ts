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

export class ProjectController {
  static async createProject() {}
  static async getUserProjects(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user) throw new ApiError(404, "No user found.");
      const projects = await ProjectService.getProjects(req.user.id);

      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  }
  static async editProject() {}
  static async deleteProject() {}
}
