import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "../../../../helpers/mailer";
import { verificationEmailTemplate } from "../../../../helpers/verificationEmailTemplate";

await connectDB()


export async function POST(request: NextRequest) {
    try {
        //check existing user
        const reqBody = await request.json()
        const { name, email, password } = reqBody

        console.log(reqBody)
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 })
        }
        //hashing
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //create user
        const newUser = new User({
            name, email, password: hashedPassword
        })

        const verificationToken = newUser.getVerificationToken();

        const savedUser = await newUser.save()
        console.log(savedUser)
        
        const verificationLink = `${process.env.NEXTAUTH_URL}/verify-email?verifyToken=${verificationToken}&id=${newUser?._id}`;
        const message = verificationEmailTemplate(verificationLink);

        //send verification email
          await sendEmail(newUser?.email, "Email Verification", message);

        return NextResponse.json({
            message: "User registered succesfully",
            success: true,
            savedUser
        }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 })

    }
}