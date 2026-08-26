"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RoomCard from "@/components/RoomCard";
import { apiFetch } from "@/lib/api";

export default function AvailableRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/api/rooms?latest=6")
      .then(setRooms)
      .catch(() => setRooms([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="available-rooms" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Available spaces
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Find a Room That Fits Your Study Style
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Explore comfortable spaces designed for focused learning, collaboration, and productive study sessions.
            </p>
          </div>
          <Link href="/rooms" className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5">
            View all rooms
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

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
    </section>
  );
}