"use client";

import { Island_Moments } from "next/font/google";

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="bg-[#6b4a36] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <span
            className={`${islandMoments.className} block text-[30px] text-orange-500 mb-4`}
          >
            Chuks Kitchen
          </span>

          <p className="text-3xl  text-white/80">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li>Home</li>
            <li>Explore</li>
            <li>My Order</li>
            <li>Account</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-4">Follow us</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 py-6 text-center text-xs text-white/60">
        © 2026 Chuks Kitchen. All rights reserved.
      </div>
    </footer>
  );
}
