import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import organizationRoutes from "./routes/organizationRoutes";
import projectRoutes from "./routes/projectRoutes";
import volunteerRoutes from "./routes/volunteerRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use("/api/auth", authRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
