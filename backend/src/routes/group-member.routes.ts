import { Router } from "express";
import asyncHandler from "express-async-handler";
import { authenticate } from "../middleware/auth.middleware";
import { GroupMemberController } from "../controllers/group-member.controller";

const router = Router();

router.get("/:groupId/members", asyncHandler(GroupMemberController.getMembers));
router.post(
  "/:groupId/members",
  authenticate,
  asyncHandler(GroupMemberController.addMember),
);
router.delete(
  "/:groupId/members/:userId",
  authenticate,
  asyncHandler(GroupMemberController.deleteMember),
);
router.patch(
  "/:groupId/members/:userId",
  authenticate,
  asyncHandler(GroupMemberController.editMember),
);

export default router;
