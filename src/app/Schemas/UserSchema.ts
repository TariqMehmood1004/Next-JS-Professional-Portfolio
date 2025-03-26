import mongoose, { Schema, Document, models, model } from "mongoose";

interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  slug: string;
  profession: string;
  password: string;
  otp?: number | null;
  otp_expires_at?: Date | null;
  is_verified: boolean;
  is_active: boolean;
  is_deleted: boolean;
  is_banned: boolean;
  is_online: boolean;
  is_available: boolean;
  image: string;
  social_media_links_id?: string;
  skills_id?: string;
  sub_skills_id?: string;
  experiences_id?: string;
  education_id?: string;
  created_at: Date;
  updated_at: Date;
}

// Define the schema
const UserSchema = new Schema<IUser>({
  first_name: { type: String, required: false, default: null },
  last_name: { type: String, required: false, default: null },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  slug: { type: String, required: false, default: null },
  profession: { type: String, required: false, default: null },
  password: { type: String, required: true },
  otp: { type: Number, default: null },
  otp_expires_at: { type: Date, default: null },
  is_verified: { type: Boolean, default: false },
  is_active: { type: Boolean, default: true },
  is_deleted: { type: Boolean, default: false },
  is_banned: { type: Boolean, default: false },
  is_online: { type: Boolean, default: true },
  is_available: { type: Boolean, default: true },
  image: { type: String, required: false, default: null },
  social_media_links_id: { type: String, default: null },
  skills_id: { type: String, default: null },
  sub_skills_id: { type: String, default: null },
  experiences_id: { type: String, default: null },
  education_id: { type: String, default: null },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Auto-remove OTP if expired before fetching
UserSchema.pre("findOne", async function (next) {
  const doc = await this.model.findOne(this.getQuery());
  if (doc && doc.otp_expires_at && new Date() > doc.otp_expires_at) {
    await doc.updateOne({ otp: null, otp_expires_at: null });
  }
  next();
});

// Auto-delete unverified users after 5 mins
UserSchema.index({ otp_expires_at: 1 }, { expireAfterSeconds: 300 });

// Create the model
const User = models.User || model("User", UserSchema);

export default User;
