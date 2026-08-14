import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import asyncHandler from "express-async-handler";
import { authenticate } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";
import { loginSchema, registerSchema } from "../models/auth.validation";

const router = Router();
router.post(
  "/register",
  validate(registerSchema),
  asyncHandler(AuthController.register),
);
router.post(
  "/login",
  validate(loginSchema),
  asyncHandler(AuthController.login),
);
router.get("/me", authenticate, asyncHandler(AuthController.me));

export default router;
