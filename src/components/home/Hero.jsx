import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 animate-pulse rounded-full bg-gray-100 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 animate-pulse rounded-full bg-gray-100 blur-3xl [animation-delay:1s]" />
        <div className="absolute left-1/2 top-1/3 h-2 w-2 animate-bounce rounded-full bg-black/20 [animation-delay:0.5s]" />
        <div className="absolute right-[20%] top-1/4 h-1.5 w-1.5 animate-ping rounded-full bg-black/20 [animation-delay:1.5s]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-[fadeInUp_0.6s_ease-out] items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
            <span className="text-sm font-medium text-gray-700">
              A better place to study
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-[fadeInUp_0.7s_ease-out] text-5xl font-bold leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl">
            Find Your
            <br />
            <span className="inline-block animate-[fadeInUp_0.9s_ease-out]">
              Perfect Study Room.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl animate-[fadeInUp_1s_ease-out] text-base leading-7 text-gray-600 sm:text-lg">
            Browse and book quiet, private study rooms designed for focused
            learning, productive collaboration, and better study sessions.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-[fadeInUp_1.1s_ease-out]">
            <Link
              href="/rooms"
              className="group inline-flex items-center gap-3 rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg"
            >
              Explore Rooms
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="#available-rooms"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-md"
            >
              See Available Rooms
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-200 pt-7 animate-[fadeInUp_1.2s_ease-out]">
            <div>
              <p className="text-2xl font-bold text-black">24/7</p>
              <p className="mt-1 text-sm text-gray-500">Study access</p>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-black">Easy</p>
              <p className="mt-1 text-sm text-gray-500">Room booking</p>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-black">Focused</p>
              <p className="mt-1 text-sm text-gray-500">Study spaces</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto h-[500px] max-w-[480px]">
            {/* Main Card */}
            <div className="absolute inset-8 animate-[float_5s_ease-in-out_infinite] rounded-3xl border border-gray-200 bg-gray-50 p-4 shadow-2xl">
              <div className="relative h-full overflow-hidden rounded-2xl bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80"
                  alt="Study room"
                  className="h-full w-full object-cover"
                />

                {/* Room Info */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Focus Room
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        3rd Floor · 4 seats
                      </p>
                    </div>
                    <div className="rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white">
                      $5/hr
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - Top */}
            <div className="absolute right-0 top-8 z-10 animate-[float_4s_ease-in-out_infinite] rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg [animation-delay:0.5s]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm text-white">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-black">
                    Easy Booking
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Reserve your space
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card - Bottom */}
            <div className="absolute bottom-10 left-0 z-10 animate-[float_4.5s_ease-in-out_infinite] rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg [animation-delay:1s]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-sm">
                  ◉
                </div>
                <div>
                  <p className="text-xs font-semibold text-black">
                    Quiet Spaces
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Built for focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}