import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs"; 
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

const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    

    // Update user password
    user.password = hashedPassword; // MUST be hashed by your User model pre-save middleware
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;


    console.log("New plain password received in reset API:", password);
console.log("New hashed password that will be saved:", hashedPassword);


    await user.save();
    const response = NextResponse.json({ message: "Password reset successful! You can now log in." });
    response.cookies.set("next-auth.session-token", "", { maxAge: 0, path: "/" });
    response.cookies.set("next-auth.callback-url", "", { maxAge: 0, path: "/" });
    response.cookies.set("next-auth.csrf-token", "", { maxAge: 0, path: "/" });

    return response;


    
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
}
