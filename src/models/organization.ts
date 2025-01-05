import mongoose, { Document, Schema } from "mongoose";
import { IOrganization } from "../interfaces";

export interface IOrganizationModel
  extends IOrganization,
    Omit<Document, "id"> {}

const OrganizationSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["ngo", "association"], required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  website: { type: String },
  social_media: {
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  areas_of_activity: [{ type: String }],
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IOrganizationModel>(
  "Organization",
  OrganizationSchema
);
