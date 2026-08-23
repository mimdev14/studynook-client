const rooms = [
  {
    id: 1,
    name: "Quiet Corner",
    description: "A peaceful room perfect for focused individual study.",
    image: "/rooms/room-1.jpg",
    floor: "3rd Floor",
    capacity: 2,
    rate: 5,
    amenities: ["Wi-Fi", "Power Outlets", "Quiet Zone"],
  },
  {
    id: 2,
    name: "Focus Hub",
    description: "A comfortable study space for small groups and discussions.",
    image: "/rooms/room-2.jpg",
    floor: "2nd Floor",
    capacity: 4,
    rate: 8,
    amenities: ["Whiteboard", "Wi-Fi", "Projector"],
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Your space. Your focus.
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Perfect Study Room
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8">
              Discover quiet and comfortable study rooms designed to help you
              focus, collaborate, and get more done.
            </p>

            <div className="mt-8">
              <a
                href="/rooms"
                className="inline-flex rounded-lg px-6 py-3 font-semibold"
              >
                Explore Rooms
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Available Rooms Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider">
              Available now
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Find a Room That Fits Your Study Style
            </h2>

            <p className="mt-3 max-w-2xl">
              Browse our latest study rooms and choose the space that works
              best for you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.id}
                className="overflow-hidden rounded-xl border"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{room.name}</h3>

                  <p className="mt-2 line-clamp-2 text-sm">
                    {room.description}
                  </p>

                  <div className="mt-4 flex gap-4 text-sm">
                    <span>{room.floor}</span>
                    <span>{room.capacity} people</span>
                    <span>${room.rate}/hr</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full border px-3 py-1 text-xs"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/rooms/${room.id}`}
                    className="mt-5 inline-block font-semibold"
                  >
                    View Details →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section 1 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider">
              Why StudyNook
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              A Better Place to Concentrate
            </h2>

            <p className="mt-4">
              StudyNook makes it simple to discover comfortable spaces,
              reserve your preferred time, and stay focused on what matters.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Section 2 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border p-8 sm:p-12">
            <h2 className="text-3xl font-bold">
              Have a Study Room to Share?
            </h2>

            <p className="mt-4 max-w-2xl">
              List your available study space and help other students find a
              place where they can learn and work comfortably.
            </p>

            <a
              href="/add-room"
              className="mt-6 inline-flex rounded-lg px-6 py-3 font-semibold"
            >
              List a Room
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}