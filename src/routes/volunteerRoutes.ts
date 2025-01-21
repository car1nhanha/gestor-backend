import express from "express";
import { verifyToken } from "../controllers/authController";
import {
  createVolunteer,
  deleteVolunteer,
  getLocations,
  getVolunteerById,
  getVolunteers,
  invite,
  updateVolunteer,
} from "../controllers/volunteerController";

const router = express.Router();

const showLog = (req: any, res: any, next: any) => {
  console.log("Request URL:", req.originalUrl);
  next();
};

router.post("/", showLog, verifyToken, createVolunteer);
router.get("/", showLog, getVolunteers);
router.get("/:id", showLog, getVolunteerById);
router.put("/:id", showLog, verifyToken, updateVolunteer);
router.delete("/:id", showLog, verifyToken, deleteVolunteer);
router.get("/get/location", showLog, getLocations);
router.post("/invite/email", showLog, verifyToken, invite);

export default router;
