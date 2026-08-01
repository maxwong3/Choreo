import { Router } from "express";
import { CoverController } from "../controllers/cover.controller";
import { authenticate } from "../middleware/auth.middleware";
import asyncHandler from "express-async-handler";

const router = Router();

router.post("/", authenticate, asyncHandler(CoverController.createCover));
router.get(
  "/user_id",
  authenticate,
  asyncHandler(CoverController.getCoversByUser),
);
router.get("/:id", asyncHandler(CoverController.getCover));
router.patch("/:id", authenticate, asyncHandler(CoverController.editCover));
router.delete("/:id", authenticate, asyncHandler(CoverController.deleteCover));

export default router;
