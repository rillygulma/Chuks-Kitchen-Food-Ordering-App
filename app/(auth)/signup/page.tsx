"use client";

import Image from "next/image";
import { useState } from "react";
import { Island_Moments } from "next/font/google";

import {
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
});

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* LEFT IMAGE */}
      <div className="relative hidden lg:block">
        <Image
          src="/signin.png"
          alt="Chuks Kitchen"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-orange-500/80" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-10">
          <div className="max-w-md">
            <h1 className="text-white text-3xl font-semibold mb-4">
              Chuks Kitchen
            </h1>

            <p className="text-white text-sm leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm">
          <div className="text-center mb-6">
            <span
              className={`${islandMoments.className} text-[22px] text-orange-500`}
            >
              Chuks Kitchen
            </span>

            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              Create Your Account
            </h2>
          </div>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-xs text-gray-600">Email</label>
              <div className="relative mt-1">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />

                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="w-full h-11 pl-10 pr-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs text-gray-600">Phone number</label>
              <div className="relative mt-1">
                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />

                <input
                  type="tel"
                  placeholder="8123340690"
                  className="w-full h-11 pl-10 pr-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-gray-600">Password</label>
              <div className="relative mt-1">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="QWE123#"
                  className="w-full h-11 pl-10 pr-10 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label className="text-xs text-gray-600">Confirm password</label>
              <div className="relative mt-1">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="QWE123#"
                  className="w-full h-11 pl-10 pr-10 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" className="blue-500" />
              <span>
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>

            {/* Continue */}
            <button
              type="submit"
              className="w-full h-11 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
            >
              Continue
            </button>

            <p className="text-center text-xs text-gray-400">
              Or continue with
            </p>

            {/* Google */}
            <button
              type="button"
              className="w-full h-11 border rounded-md flex items-center justify-center gap-2 text-sm text-gray-700"
            >
              <FcGoogle className="text-lg" />
              Continue with Google
            </button>

            {/* Apple */}
            <button
              type="button"
              className="w-full h-11 border rounded-md flex items-center justify-center gap-2 text-sm text-gray-700"
            >
              <FaApple className="text-lg" />
              Continue with Apple
            </button>

            <p className="text-center text-xs text-gray-500">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer">
                <Link href="/signin">Sign In</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
