import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import asyncHandler from "express-async-handler";

const router = Router();
router.post(
    "/register",
    asyncHandler(AuthController.register)
);
router.post(
    "/login",
    asyncHandler(AuthController.login)
);

export default router;