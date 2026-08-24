"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      await signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/";
          },
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  };

  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-black transition-opacity duration-200 hover:opacity-70"
        >
          RecipeHub
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <Link
            href="/rooms"
            className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Rooms
          </Link>

          <Link
            href="/about"
            className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Session Loading */}
          {isPending ? (
            <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-100" />
          ) : user ? (
            <>
              {/* Dashboard */}
              <Link
                href="/dashboard"
                className="hidden rounded-lg px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-gray-100 sm:block"
              >
                Dashboard
              </Link>

              {/* User */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="h-9 w-9 rounded-full border border-gray-200 object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}

                {/* Name */}
                <span className="hidden max-w-[120px] truncate text-sm font-medium text-black lg:block">
                  {user.name || "User"}
                </span>
              </div>

              {/* Logout */}
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                href="/auth/login"
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
              >
                Login
              </Link>

              {/* Get Started */}
              <Link
                href="/auth/register"
                className="rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}