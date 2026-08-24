"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn, signUp } from "@/lib/auth-client";

function getPasswordIssues(password) {
  const issues = [];
  if (password.length < 6) issues.push("at least 6 characters");
  if (!/[A-Z]/.test(password)) issues.push("one uppercase letter");
  if (!/[a-z]/.test(password)) issues.push("one lowercase letter");
  return issues;
}

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const photoURL = formData.get("photoURL");
    const password = formData.get("password");

    setError("");

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!photoURL) {
      setError("Please enter a photo URL.");
      return;
    }

    const passwordIssues = getPasswordIssues(password || "");
    if (passwordIssues.length > 0) {
      setError(`Password needs ${passwordIssues.join(", ")}.`);
      return;
    }

    try {
      setIsLoading(true);

      const { error } = await signUp.email({
        name,
        email,
        password,
        image: photoURL,
      });

      if (error) {
        setError(error.message || "Registration failed. Please try again.");
        return;
      }

      toast.success("Registration successful! Please login.");
      router.push("/auth/login");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      setIsLoading(true);
      await signIn.social({ provider: "google", callbackURL: "/" });
    } catch (error) {
      setError("Google sign-up failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-black"
          >
            StudyNook
          </Link>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black">
            Create your account
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            Join StudyNook to browse and book study rooms.
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-black"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jordan Rivera"
                autoComplete="name"
                disabled={isLoading}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10 disabled:cursor-not-allowed disabled:bg-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-black"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                disabled={isLoading}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10 disabled:cursor-not-allowed disabled:bg-gray-100"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="photoURL"
                className="mb-2 block text-sm font-medium text-black"
              >
                Photo URL
              </label>

              <input
                id="photoURL"
                name="photoURL"
                type="text"
                placeholder="https://example.com/photo.jpg"
                autoComplete="off"
                disabled={isLoading}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10 disabled:cursor-not-allowed disabled:bg-gray-100"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-black"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                disabled={isLoading}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10 disabled:cursor-not-allowed disabled:bg-gray-100"
              />
              <p className="mt-2 text-xs text-gray-500">
                At least 6 characters, with one uppercase and one lowercase letter.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {isLoading ? "Creating account..." : "Register"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs text-gray-400">OR</span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Google OAuth */}
          <button
            type="button"
            onClick={handleGoogle}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            <span className="text-base">G</span>
            Continue with Google
          </button>
        </div>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-black underline underline-offset-4"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}