"use client";

import Image from "next/image";
import { Island_Moments } from "next/font/google";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
});

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* Left Side Image */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/signin.png"
          alt="Chuks Kitchen"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-orange-500/80 flex flex-col items-center justify-center text-center px-6 lg:px-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Chuks Kitchen
          </h1>
          <p className="text-white text-sm lg:text-base">
            Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-md">

          {/* Top Span */}
          <div className="mb-2">
            <span className={`${islandMoments.className} text-[22px] text-orange-500 block`}>
              Chuks Kitchen
            </span>
          </div>

          {/* Login Heading */}
          <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
            Login your Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="relative">
              <label className="text-sm font-medium">Email or phone number</label>
              <MdEmail className="absolute left-3 mt-6 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className="mt-1 w-full border rounded-lg pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-sm font-medium">Password</label>
              <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className="mt-1 w-full border rounded-lg pl-10 pr-10 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-lg"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
              <p className="text-xs text-right text-blue-500 mt-1 cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
            >
              Continue
            </button>

            {/* Or continue with */}
            <div className="text-center text-sm text-gray-500 my-2">Or continue with</div>

            {/* Social Buttons */}
            <div className="space-y-2">
              <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <FcGoogle className="text-2xl" />
                Continue with Google
              </button>

              <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <AiFillApple className="text-2xl" />
                Continue with Apple
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              Don’t have an account? <span className="text-blue-500 cursor-pointer hover:underline"><Link href="/signup">Create an account</Link></span>
            </p>

          </form>

        </div>
      </div>

    </div>
  );
}
