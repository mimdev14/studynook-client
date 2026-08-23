import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-black"
            >
              StudyNook
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              Find a quiet place to focus, learn, and get things done.
              Discover comfortable study rooms and book the space that works
              best for you.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 transition-colors hover:text-black"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="text-sm text-gray-600 transition-colors hover:text-black"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 transition-colors hover:text-black"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>hello@studynook.com</p>
              <p>+880 1234-567890</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-6 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} StudyNook. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              Facebook
            </a>

            <a
              href="#"
              aria-label="X"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              X
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}