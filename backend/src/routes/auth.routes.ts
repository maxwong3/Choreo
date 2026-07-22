import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import asyncHandler from "express-async-handler";

const router = Router();
router.get(
    "/testroute",
    asyncHandler(AuthController.testroute)
);
router.post(
    "/register",
    asyncHandler(AuthController.register)
);
router.post(
    "login",
    asyncHandler(AuthController.login)
);
router.post(
    "/refresh-token",
    asyncHandler(AuthController.refreshToken)
);

export default router;