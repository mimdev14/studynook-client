import Link from "next/link";

export default function RoomCard({ room }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-lg bg-white/95 px-3 py-2 text-sm font-bold text-black shadow-sm backdrop-blur-sm">
          ${room.hourlyRate}
          <span className="font-normal text-gray-500">/hr</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-black">{room.name}</h3>
          <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {room.floor}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{room.description}</p>

        <div className="mt-5 flex items-center gap-5 border-y border-gray-100 py-4 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <span className="font-semibold text-black">{room.capacity}</span> seats
          </span>
          <span className="h-4 w-px bg-gray-200" />
          <span>Available to book</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities?.slice(0, 3).map((a) => (
            <span key={a} className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
              {a}
            </span>
          ))}
          {room.amenities?.length > 3 && (
            <span className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        <Link
          href={`/rooms/${room._id}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-black bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md"
        >
          View Details <span>→</span>
        </Link>
      </div>
    </article>
  );
}