import { Router } from "express";
import { ProfileController } from "../controllers/profile.controller";
import asyncHandler from "express-async-handler";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();
router.get(
    "/me",
    authenticate, 
    asyncHandler(ProfileController.getMe)
);

export default router;