

import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto";
import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/userModel";
import mongoose from "mongoose";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const verificationToken = searchParams.get("verifyToken"); // The raw token from the email link
        const userId = searchParams.get("id");

        // 1. Check for missing token or ID
        if (!verificationToken || !userId) {
            return NextResponse.json(
                { message: "Invalid or missing token/ID" },
                { status: 400 }
            );
        }

        // 2. Hash the token from the URL to match the one in the DB
        const hashedToken = crypto
            .createHash("sha256")
            .update(verificationToken)
            .digest("hex");

        // 3. Find the user using the USER ID and the HASHED TOKEN
        const user = await User.findOne({
            _id: new mongoose.Types.ObjectId(userId),
            verifyToken: hashedToken, // Use the hashed token for the query
            verifyTokenExpiry: { $gt: new Date() }, // Check if token is expired
        });

        // 4. Handle if user not found (invalid token or expired)
        if (!user) {
            return NextResponse.json(
                { message: "Invalid or expired token" },
                { status: 400 }
            );
        }

        // 5. Success! Update the user
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        // 6. Send back a success response
        // Your frontend checks for "verified: true"
        return NextResponse.json(
            { message: "Email verified successfully!", verified: true },
            { status: 200 }
        );

    } catch (error: any) {
        return NextResponse.json(
            { message: "Something went wrong", error: error.message },
            { status: 500 }
        );
    }
}