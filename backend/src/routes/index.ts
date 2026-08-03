import { Router } from "express";
import authRoutes from "./auth.routes";
import profileRoutes from "./profile.routes";
import projectRoutes from "./project.routes";
import coverRoutes from "./cover.routes";
import groupRoutes from "./group.routes";
import groupMemberRoutes from "./group-member.routes";

const router = Router();

// Project organization change suggestion: Remove ApiError checking from all controllers, just check in services

router.use("/auth", authRoutes);

router.use("/profile", profileRoutes);

router.use("/projects", projectRoutes);

router.use("/covers", coverRoutes);

router.use("/groups", groupRoutes);

router.use("/groups", groupMemberRoutes);

export default router;
