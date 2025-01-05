import bcrypt from "bcrypt";
import mongoose, { Document, Schema } from "mongoose";
import { IVolunteer } from "../interfaces";

export interface IVolunteerModel extends IVolunteer, Omit<Document, "id"> {
  password?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const VolunteerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  role: { type: String, enum: ["volunteer", "admin"], default: "volunteer" },
  password: {
    type: String,
    required: function (this: IVolunteerModel) {
      return this.role === "admin";
    },
  },
  created_at: { type: Date, default: Date.now },
});

VolunteerSchema.pre<IVolunteerModel>("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password!, salt);
  }
  next();
});

VolunteerSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password!);
};

export default mongoose.model<IVolunteerModel>("Volunteer", VolunteerSchema);
