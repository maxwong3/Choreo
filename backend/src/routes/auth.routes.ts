import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import asyncHandler from "express-async-handler";
import { authenticate } from "../middleware/auth.middleware"

const router = Router();
router.post(
    "/register",
    asyncHandler(AuthController.register)
);
router.post(
    "/login",
    asyncHandler(AuthController.login)
);
router.get(
    "/me",
    authenticate,
    asyncHandler(AuthController.me)
);

export default router;