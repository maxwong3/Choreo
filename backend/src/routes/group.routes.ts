import { Router } from "express";
import asyncHandler from "express-async-handler";
import { authenticate } from "../middleware/auth.middleware";
import { GroupController } from "../controllers/group.controller";

const router = Router();

router.post("/", authenticate, asyncHandler(GroupController.createGroup));
router.get("/me", authenticate, asyncHandler(GroupController.getMyGroups));
router.get("/:groupId", asyncHandler(GroupController.getGroup));
router.patch(
  "/:groupId",
  authenticate,
  asyncHandler(GroupController.editGroup),
);
router.delete(
  "/:groupId",
  authenticate,
  asyncHandler(GroupController.deleteGroup),
);

export default router;
