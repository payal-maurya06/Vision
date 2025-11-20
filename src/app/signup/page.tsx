"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import Joi from "joi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// Icons
import { User, Mail, Lock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(6).required(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      error.details.forEach((err) => toast.error(err.message));
      return;
    }

    try {
      const res = await axios.post("/api/signup", formData);
      if (res.status === 200) {
        toast.success("OTP sent to your email");
        router.push(`/verify-otp?email=${formData.email}`); 
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white w-full max-w-4xl shadow-xl rounded-2xl flex overflow-hidden">

        {/* LEFT Illustration */}
        <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center p-8">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg"
            alt="signup illustration"
            className="w-4/5"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-10 space-y-5">

          <h1 className="text-3xl font-semibold text-center">Sign Up</h1>

          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 font-medium">
              Log in
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME FIELD */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 w-full pl-10 p-3 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* EMAIL FIELD */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 w-full pl-10 p-3 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-300 w-full pl-10 p-3 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Create account
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-4 text-gray-500 text-sm">Or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* GOOGLE Signup only */}
          <button
            onClick={() => signIn("google")}
            className="w-full border py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100"
          >
            <img src="/google.svg" className="w-5" alt="google" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
