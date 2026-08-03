import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { ApiError } from "../utils/ApiError";
import { GroupService } from "../services/group.service";
import {
  CreateGroupInput,
  EditGroupInput,
  groupIdParam,
} from "../models/group.validation";

interface CreateGroupRequest extends AuthRequest {
  body: CreateGroupInput;
}

interface EditGroupRequest extends AuthRequest {
  body: EditGroupInput;
}

export class GroupController {
  static async createGroup(
    req: CreateGroupRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");

      const group = await GroupService.createGroup(req.user.id, req.body);

      res.status(201).json(group);
    } catch (err) {
      next(err);
    }
  }
  static async getGroup(req: Request, res: Response, next: NextFunction) {
    try {
      const { groupId } = groupIdParam.parse(req.params);
      const group = await GroupService.getGroup(groupId);

      res.status(200).json(group);
    } catch (err) {
      next(err);
    }
  }
  static async getMyGroups(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      const groups = await GroupService.getMyGroups(req.user.id);

      res.status(200).json(groups);
    } catch (err) {
      next(err);
    }
  }
  static async editGroup(
    req: EditGroupRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      const { groupId } = groupIdParam.parse(req.params);
      const group = await GroupService.editGroup(
        req.user.id,
        groupId,
        req.body,
      );

      res.status(200).json(group);
    } catch (err) {
      next(err);
    }
  }
  static async deleteGroup(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user)
        throw new ApiError(401, "Must be logged in to perform this action.");
      const { groupId } = groupIdParam.parse(req.params);
      const group = await GroupService.deleteGroup(req.user.id, groupId);
      if (!group) throw new ApiError(404, "No such group.");

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
