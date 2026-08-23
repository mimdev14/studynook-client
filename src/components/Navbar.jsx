"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-black"
        >
          StudyNook
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/rooms"
            className="text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:text-black"
          >
            Rooms
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {/* Login */}
          <Link
            href="/login"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md"
          >
            Login
          </Link>

          {/* Register */}
          <Link
            href="/register"
            className="rounded-lg border border-black bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}