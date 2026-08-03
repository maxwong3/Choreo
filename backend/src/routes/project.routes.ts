import { Router } from "express";
import asyncHandler from "express-async-handler";
import { authenticate } from "../middleware/auth.middleware";
import { ProjectController } from "../controllers/project.controller";

const router = Router();

router.post("/", authenticate, asyncHandler(ProjectController.createProject));
router.get(
  "/me",
  authenticate,
  asyncHandler(ProjectController.getUserProjects),
);
router.get("/:id", asyncHandler(ProjectController.getProject));
router.patch("/:id", authenticate, asyncHandler(ProjectController.editProject));
router.delete(
  "/:id",
  authenticate,
  asyncHandler(ProjectController.deleteProject),
);

export default router;
