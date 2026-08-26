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
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-black transition-opacity duration-200 hover:opacity-70"
        >
          StudyNook
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
          <Link href="/rooms" className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
            Rooms
          </Link>

          {user && (
            <>
              <Link href="/add-room" className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Add Room
              </Link>
              <Link href="/my-listings" className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                My Listings
              </Link>
              <Link href="/my-bookings" className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                My Bookings
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-100" />
          ) : user ? (
            <>
              <div className="flex items-center gap-3">
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
                <span className="hidden max-w-[120px] truncate text-sm font-medium text-black lg:block">
                  {user.name || "User"}
                </span>
              </div>

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
              <Link href="/auth/login" className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white">
                Login
              </Link>
              <Link href="/auth/register" className="rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md">
                Get Started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}