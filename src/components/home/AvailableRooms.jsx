import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Focus Room",
    description:
      "A quiet private room designed for deep individual study and uninterrupted concentration.",
    image: "/rooms/room-1.jpg",
    floor: "3rd Floor",
    capacity: 2,
    rate: 5,
    amenities: ["Wi-Fi", "Power Outlets", "Quiet Zone"],
  },
  {
    id: 2,
    name: "Collaboration Hub",
    description:
      "A spacious room for small study groups, discussions, and collaborative learning.",
    image: "/rooms/room-2.jpg",
    floor: "2nd Floor",
    capacity: 4,
    rate: 8,
    amenities: ["Whiteboard", "Wi-Fi", "Projector"],
  },
  {
    id: 3,
    name: "Reading Nook",
    description:
      "A cozy study room with a calm atmosphere for reading and focused work.",
    image: "/rooms/room-3.jpg",
    floor: "1st Floor",
    capacity: 2,
    rate: 4,
    amenities: ["Wi-Fi", "Quiet Zone", "Air Conditioning"],
  },
  {
    id: 4,
    name: "Study Lounge",
    description:
      "A comfortable space where students can study together and share ideas.",
    image: "/rooms/room-4.jpg",
    floor: "4th Floor",
    capacity: 6,
    rate: 10,
    amenities: ["Projector", "Wi-Fi", "Power Outlets"],
  },
  {
    id: 5,
    name: "Research Room",
    description:
      "A dedicated workspace for research, assignments, and long study sessions.",
    image: "/rooms/room-5.jpg",
    floor: "3rd Floor",
    capacity: 4,
    rate: 7,
    amenities: ["Wi-Fi", "Whiteboard", "Power Outlets"],
  },
  {
    id: 6,
    name: "Silent Space",
    description:
      "A distraction-free environment built for students who need complete focus.",
    image: "/rooms/room-6.jpg",
    floor: "2nd Floor",
    capacity: 2,
    rate: 5,
    amenities: ["Quiet Zone", "Wi-Fi", "Air Conditioning"],
  },
];

export default function AvailableRooms() {
  return (
    <section id="available-rooms" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Available spaces
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Find a Room That Fits Your Study Style
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Explore comfortable spaces designed for focused learning,
              collaboration, and productive study sessions.
            </p>
          </div>

          <Link
            href="/rooms"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5"
          >
            View all rooms
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Room Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Price */}
                <div className="absolute right-4 top-4 rounded-lg bg-white/95 px-3 py-2 text-sm font-bold text-black shadow-sm backdrop-blur-sm">
                  ${room.rate}
                  <span className="font-normal text-gray-500">/hr</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-black">
                    {room.name}
                  </h3>

                  <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {room.floor}
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                  {room.description}
                </p>

                {/* Room Info */}
                <div className="mt-5 flex items-center gap-5 border-y border-gray-100 py-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <span className="font-semibold text-black">
                      {room.capacity}
                    </span>
                    seats
                  </span>

                  <span className="h-4 w-px bg-gray-200" />

                  <span>Available to book</span>
                </div>

                {/* Amenities */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Details Button */}
                <Link
                  href={`/rooms/${room.id}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-black bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md"
                >
                  View Details
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}