import Link from "next/link";

export default function ListYourRoom() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-14 text-white sm:px-12 lg:px-16">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Share your space
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have a study room to share?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
                List your available study space on StudyNook and help students
                find a comfortable place to learn, focus, and collaborate.
              </p>

              <Link
                href="/add-room"
                className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg"
              >
                List a Room

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex lg:h-40 lg:w-40 lg:items-center lg:justify-center">
              <div className="flex h-32 w-32 rotate-3 items-center justify-center rounded-3xl border border-white/20 bg-white/10 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl font-bold">+</div>

                  <p className="mt-2 text-xs font-medium text-gray-300">
                    Add your space
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