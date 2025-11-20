import { NextRequest, NextResponse } from "next/server";
import redis from "../../../../lib/redis";
import User from "../../../../models/userModel";
import { connectDB } from "../../../../lib/mongodb";
import bcryptjs from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    
    await connectDB();
  
    const { email, otp } = await req.json();


  


    if (!email || !otp) {
    return NextResponse.json({ message: "Email and OTP are required" }, { status: 400 });
    }


    

    // Fetch stored OTP from Redis
    const storedHashedOtp = await redis.get(`otp:${email}`);

    

    console.log("DEBUG VERIFY -> email:", email);
console.log("DEBUG VERIFY -> providedOtp:", otp);
console.log("DEBUG VERIFY -> storedHashedOtp:", storedHashedOtp);


    if (!storedHashedOtp) {
      return NextResponse.json({ message: "OTP expired!" }, { status: 400 });
    }

    // trim just in case
const provided = otp?.toString().trim();

    // Compare entered OTP with hashed OTP
    const isMatch = await bcryptjs.compare(provided, storedHashedOtp);
console.log("DEBUG VERIFY -> bcryptCompareResult:", isMatch);




    if (!isMatch) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }



    // Update user as verified
    await User.findOneAndUpdate(
      { email },
      { isVerified: true }
    );

    // Delete OTP from Redis
    await redis.del(`otp:${email}`);

    return NextResponse.json({ message: "Email verified successfully!", verified: true });

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
