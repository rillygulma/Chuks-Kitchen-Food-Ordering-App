"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Island_Moments } from "next/font/google";

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
});

export default function AccountPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <span
          className={`${islandMoments.className} text-[22px] text-orange-500`}
        >
          Chuks Kitchen
        </span>

        <button
          onClick={() => router.push("/signin")}
          className="border border-blue-500 text-blue-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition"
        >
          Sign In
        </button>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12">

          {/* Left Image */}
          <div className="w-full h-[420px] lg:h-[520px] relative rounded-2xl overflow-hidden">
            <Image
              src="/signin.png"
              alt="Sign In"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="max-w-lg">

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Your Authentic Taste of Nigeria
            </h1>

            <p className="text-gray-600 mb-6">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  🍽️
                </span>
                <span className="text-sm font-medium">
                  Freshly Prepared
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  🤝
                </span>
                <span className="text-sm font-medium">
                  Support Local Business
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  🚚
                </span>
                <span className="text-sm font-medium">
                  Fast & Reliable Delivery
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition">
                Start Your Order
              </button>

              <button className="w-full border border-blue-500 text-blue-500 font-medium py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More About Us
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
