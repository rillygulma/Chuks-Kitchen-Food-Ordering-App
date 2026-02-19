"use client";
import Link from "next/link";
import { useState } from "react";
import { Island_Moments } from "next/font/google";
import { usePathname } from "next/navigation";

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "My Orders", href: "/myorders" },
    { name: "Account", href: "/account" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-white">
      <nav className="max-w-7xl mx-auto px-6 md:px-16 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <span
          className={`${islandMoments.className} text-[22px] text-orange-500`}
        >
          Chuks Kitchen
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-sm text-gray-800">
          {menuItems.map((item) => (
            <li key={item.name} className="cursor-pointer">
              <Link
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-orange-500 font-medium"
                    : "hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Login */}
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium">
          <Link href="/signin">Login</Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-800">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)} // Close menu on click
                  className={`block ${
                    pathname === item.href
                      ? "text-orange-500 font-medium"
                      : "hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <button className="mt-2 bg-orange-500 text-white py-2 rounded-md text-sm font-medium w-full">
              <Link href="/signin">Login</Link>
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
