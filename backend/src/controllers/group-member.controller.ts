import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { GroupMemberService } from "../services/group-member.service";
import {
  AddMemberInput,
  addMemberSchema,
  UpdateMemberRoleInput,
  updateMemberRoleSchema,
  groupIdParam,
  groupMemberParam,
} from "../models/group-member.validation";

interface AddMemberRequest extends AuthRequest {
  body: AddMemberInput;
}

interface UpdateMemberRoleRequest extends AuthRequest {
  body: UpdateMemberRoleInput;
}

export class GroupMemberController {
  static async getMembers(req: Request, res: Response) {
    // No need for next, asyncHandler handles async errors. Group existing check handled in the service.
    const { groupId } = groupIdParam.parse(req.params);
    const members = await GroupMemberService.getMembers(groupId);

    res.status(200).json(members);
  }
  static async addMember(req: AddMemberRequest, res: Response) {
    // req.user.id is validated by auth middleware.
    // Target user existence is checked in the service.
    const { groupId } = groupIdParam.parse(req.params);
    const { userId } = addMemberSchema.parse(req.body);

    const member = await GroupMemberService.addMember(
      groupId,
      req.user!.id, // requester
      userId, // user being added if added by a moderator
    );

    res.status(201).json(member);
  }
  static async deleteMember(req: AuthRequest, res: Response) {
    const { groupId } = groupIdParam.parse(req.params);
    const { userId } = groupMemberParam.parse(req.params);

    await GroupMemberService.deleteMember(groupId, req.user!.id, userId);

    res.status(204).send();
  }
  static async editMember(req: UpdateMemberRoleRequest, res: Response) {
    const { groupId } = groupIdParam.parse(req.params);
    const { userId } = groupMemberParam.parse(req.params);
    const data = updateMemberRoleSchema.parse(req.body);

    const member = await GroupMemberService.editMember(
      groupId,
      req.user!.id,
      userId,
      data,
    );

    res.status(200).json(member);
  }
}
