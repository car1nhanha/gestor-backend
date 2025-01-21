import express from "express";
import { verifyToken } from "../controllers/authController";
import {
  createOrganization,
  deleteOrganization,
  getOrganizationById,
  getOrganizations,
  updateOrganization,
} from "../controllers/organizationController";

const router = express.Router();

router.post("/", verifyToken, createOrganization);
router.get("/", getOrganizations);
router.get("/:id", getOrganizationById);
router.put("/:id", verifyToken, updateOrganization);
router.delete("/:id", verifyToken, deleteOrganization);

export default router;
