import mongoose, { Document, Schema } from "mongoose";
import crypto from "crypto";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;

  // Email verification fields
  isVerified: boolean;
  verifyToken: string;
  verifyTokenExpiry: Date;
  getVerificationToken(): string;

  // Reset password fields
  resetPasswordToken?: string;
  resetPasswordExpiry?: Date;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  // EMAIL VERIFICATION
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
  },
  verifyTokenExpiry: {
    type: Date,
  },

  // RESET PASSWORD FIELDS
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpiry: {
    type: Date,
  },
});


// 🔐 HASH PASSWORD BEFORE SAVE
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});


// EMAIL VERIFICATION TOKEN FUNCTION
UserSchema.methods.getVerificationToken = function (): string {
  const verificationToken = crypto.randomBytes(20).toString("hex");

  this.verifyToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  this.verifyTokenExpiry = new Date(Date.now() + 30 * 60 * 1000);

  return verificationToken;
};


export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
