import express from "express";
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

router.post("/", showLog, createVolunteer);
router.get("/", showLog, getVolunteers);
router.get("/:id", showLog, getVolunteerById);
router.put("/:id", showLog, updateVolunteer);
router.delete("/:id", showLog, deleteVolunteer);
router.get("/get/location", showLog, getLocations);
router.post("/invite/email", showLog, invite);

export default router;
