import mongoose, { Document, Schema } from "mongoose";
import { IProject } from "../interfaces";

export interface IProjectModel extends IProject, Omit<Document, "id"> {}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  organization_id: {
    type: Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "completed", "planned"],
    required: true,
  },
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  volunteers_needed: { type: Number, required: true },
  current_volunteers: { type: Number, default: 0 },
  skills_required: [{ type: String }],
});

export default mongoose.model<IProjectModel>("Project", ProjectSchema);
