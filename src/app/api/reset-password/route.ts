import { NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/userModel";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: "Token and password are required" },
        { status: 400 }
      );
    }

    // Hash the token again to match DB
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Find user by token + check expiry
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpiry: { $gt: Date.now() }, // not expired
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // Update user password
    user.password = password; // MUST be hashed by your User model pre-save middleware
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;

    await user.save();

    return NextResponse.json({
      message: "Password reset successful! You can now log in.",
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
}
