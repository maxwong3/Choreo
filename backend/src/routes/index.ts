import { Router } from "express";
import authRoutes from "./auth.routes";
import profileRoutes from "./profile.routes";
import projectRoutes from "./project.routes";
import coverRoutes from "./cover.routes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/profile", profileRoutes);

router.use("/projects", projectRoutes);

router.use("/covers", coverRoutes);

export default router;
