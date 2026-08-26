"use client";

import { useEffect, useState } from "react";
import RoomCard from "@/components/RoomCard";
import Spinner from "@/components/Spinner";
import { apiFetch } from "@/lib/api";
import { AMENITY_OPTIONS } from "@/lib/constants";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "StudyNook – Available Rooms";
  }, []);

  const toggleAmenity = (a) => {
    setAmenities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (amenities.length) params.set("amenities", amenities.join(","));

    setLoading(true);
    apiFetch(`/api/rooms${params.toString() ? `?${params}` : ""}`)
      .then(setRooms)
      .catch(() => setRooms([]))
      .finally(() => setLoading(false));
  }, [search, amenities]);

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

      <div className="mt-4 flex flex-wrap gap-3">
        {AMENITY_OPTIONS.map((a) => (
          <label
            key={a}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer ${
              amenities.includes(a) ? "border-black bg-black text-white" : "border-gray-300 text-black"
            }`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={amenities.includes(a)}
              onChange={() => toggleAmenity(a)}
            />
            {a}
          </label>
        ))}
      </div>

      <div className="mt-10">
        {loading ? (
          <Spinner />
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