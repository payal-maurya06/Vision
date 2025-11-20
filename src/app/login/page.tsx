"use client";

import { signIn } from "next-auth/react";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Joi from "joi";
import { toast } from "react-toastify";

import { Mail, Lock } from "lucide-react";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const router = useRouter();
  const searchParams = useSearchParams(); // <-- For query params

  // Toast after password reset
  useEffect(() => {
    const resetSuccess = searchParams.get("reset");
    if (resetSuccess === "success") {
      toast.success("Password reset successful! You can now login.");
      // Remove query param from URL so toast doesn't appear again
      router.replace("/login");
    }
  }, [searchParams, router]);

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(6).required(),
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      error.details.forEach((err) => toast.error(err.message));
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (res?.error) {
      setTimeout(() => {
        if (res.error === "CredentialsSignin") {
          toast.error("Invalid email or password");
        } else if (res.error === "EmailNotVerified") {
          toast.error("Please verify your email through OTP.");
        } else {
          toast.error(res.error);
        }
      }, 0);
      return;
    }

    toast.success("Login successful!");
    router.push("/");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-[350px] space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <div className="flex items-center border rounded-lg px-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              className="p-2 w-full outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Password</label>
          <div className="flex items-center border rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-500" />
            <input
              type="password"
              name="password"
              className="p-2 w-full outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="text-right mt-2">
            <Link
              href="/forgot-password"
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg w-full font-semibold"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => signIn("google")}
          className="border border-gray-400 hover:bg-gray-100 text-gray-800 py-2 rounded-lg w-full font-semibold flex items-center justify-center gap-2"
        >
          <img src="/google.svg" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-center text-gray-600 text-sm mt-2">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
