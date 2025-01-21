import express from "express";
import { verifyToken } from "../controllers/authController";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../controllers/projectController";

const router = express.Router();

router.post("/", verifyToken, createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", verifyToken, updateProject);
router.delete("/:id", verifyToken, deleteProject);

export default router;
