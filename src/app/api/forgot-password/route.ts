import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/userModel";

import crypto from "crypto";
import { sendEmail } from "../../../../helpers/mailer";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { message: "Email is required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(20).toString("hex");
        const hashedResetToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");

        user.resetPasswordToken = hashedResetToken;
        user.resetPasswordExpiry = new Date(Date.now() + 30 * 60 * 1000); // 30 min
        await user.save();

        const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;

        await sendEmail(
            user.email,
            "Password Reset",
            `Reset your password: ${resetUrl}`
        );


        return NextResponse.json(
            { message: "Reset email sent successfully" },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
