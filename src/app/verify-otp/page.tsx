"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { CircleX, SquareCheckBig } from "lucide-react";
import { useToast } from "../../components/ui/use-toast";

import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "../../components/ui/input-otp"; // <- import your OTP components

export default function VerifyEmail() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otp.trim() })
      });

      const data = await res.json();

      if (res.ok) {
        setVerified(true);
        toast({
          title: "Email Verified!",
          description: "Your email has been successfully verified.",
        });

        setTimeout(() => router.push("/login"), 1500);
      } else {
        setError(true);
        toast({
          variant: "destructive",
          title: "Verification Failed",
          description: data.message || "OTP is incorrect or expired.",
        });
      }
    } catch (err) {
      setError(true);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <h1 className="flex justify-center items-center h-screen text-lg">
        Verifying OTP, please wait...
      </h1>
    );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">

        {verified && (
          <Alert variant="default" className="mb-5">
            <SquareCheckBig color="green" />
            <AlertTitle>Email Verified!</AlertTitle>
            <AlertDescription>
              Your email has been verified successfully.
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mb-5">
            <CircleX color="red" />
            <AlertTitle>Verification Failed</AlertTitle>
            <AlertDescription>
              The OTP you entered is incorrect or expired.
            </AlertDescription>
          </Alert>
        )}

        {/* OTP Input Form */}
        {!verified && (
          <form
            onSubmit={handleVerify}
            className="bg-white shadow-lg rounded-xl p-6 space-y-5"
          >
            <h2 className="text-xl font-semibold text-center mb-3">
              Verify Your Email
            </h2>

            <p className="text-center text-gray-600 mb-4">
              Enter the OTP sent to:
              <br />
              <span className="font-medium">{email}</span>
            </p>

            <div className="flex justify-center mb-4">
              <div className="flex justify-center mb-4">
                <InputOTP
                  value={otp}
                  onChange={(value) => setOtp(value.slice(0, 6))}
                  maxLength={6}
                  containerClassName="gap-2"
                  className="w-12 h-12 border rounded-md text-center text-lg"
                >
                  {/* Provide 6 children slots for the OTP */}
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTP>
              </div>

            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition active:scale-95"
            >
              Verify OTP
            </button>

            <button
              type="button"
              className="mt-2 w-full text-blue-600 font-medium underline"
              onClick={() => router.push(`/resend-otp?email=${email}`)}
            >
              Resend OTP
            </button>
          </form>

        )}
      </div>
    </div>
  );
}
