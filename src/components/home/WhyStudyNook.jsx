const benefits = [
  {
    number: "01",
    title: "Find Your Space",
    description:
      "Discover study rooms that match your preferred environment, capacity, and amenities.",
  },
  {
    number: "02",
    title: "Book With Ease",
    description:
      "Choose your date and time, check availability, and reserve your study space in just a few steps.",
  },
  {
    number: "03",
    title: "Stay Focused",
    description:
      "Leave distractions behind and enjoy a comfortable space designed for productive study sessions.",
  },
];

export default function WhyStudyNook() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Why StudyNook
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Everything you need for a better study session.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            From finding the right room to securing your preferred time,
            StudyNook keeps the entire process simple.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group bg-white p-8 transition-all duration-300 hover:bg-gray-50"
            >
              <span className="text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-black">
                {benefit.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-black">
                {benefit.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {benefit.description}
              </p>

              <div className="mt-8 h-px w-10 bg-black transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}