"use client";

import { useEffect, useState } from "react";
import RoomCard from "@/components/RoomCard";
import { apiFetch } from "@/lib/api";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = search ? `?search=${encodeURIComponent(search)}` : "";
    setLoading(true);
    apiFetch(`/api/rooms${params}`)
      .then(setRooms)
      .catch(() => setRooms([]))
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Available Rooms</h1>

      <input
        type="text"
        placeholder="Search rooms by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-6 w-full max-w-md rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none"
      />

      <div className="mt-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading rooms...</p>
        ) : rooms.length === 0 ? (
          <p className="text-center text-gray-500">No rooms found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}