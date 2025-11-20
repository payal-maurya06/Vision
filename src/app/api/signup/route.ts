import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "../../../../helpers/mailer";
import { verificationEmailTemplate } from "../../../../helpers/verificationEmailTemplate";
import redis from "../../../../lib/redis";




export async function POST(request: NextRequest) {
    try {

        await connectDB()
       
 



        //check existing user
        const reqBody = await request.json()
        const { name, email, password } = reqBody


        const userExists = await User.findOne({ email })

        if (userExists) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 })
        }
        //hashing
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //create user
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            isVerified: false,
        });

       {/* const verificationToken = newUser.getVerificationToken();

        const savedUser = await newUser.save()
        console.log(savedUser)

        const verificationLink = `${process.env.NEXTAUTH_URL}/verify-email?verifyToken=${verificationToken}&id=${newUser?._id}`;
        const message = verificationEmailTemplate(verificationLink);

        //send verification email
        await sendEmail(newUser?.email, "Email Verification", message); */}

       // Generate OTP
 const otp = Math.floor(100000 + Math.random() * 900000).toString();

 // Hash OTP before storing
const hashedOtp = await bcryptjs.hash(otp, 10);

    // Store hashed OTP in Redis with 2 minute expiry
    await redis.set(`otp:${email}`, hashedOtp, "EX", 400);



    
// DEBUG: log values (temporary)
console.log("DEBUG SIGNUP -> email:", email);
console.log("DEBUG SIGNUP -> plainOtp:", otp);
console.log("DEBUG SIGNUP -> hashedOtpSaved:", hashedOtp);

    // Send email
   await sendEmail(
    user.email,
    "Verify Your Email - OTP",
    verificationEmailTemplate(otp)
);

    return NextResponse.json({
      message: "Signup successful. OTP sent to your email."
    });





    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}