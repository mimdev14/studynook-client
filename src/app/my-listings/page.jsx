"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSession } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";
import RoomCard from "@/components/RoomCard";
import Spinner from "@/components/Spinner";

export default function MyListingsPage() {
  const { data: session, isPending } = useSession();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "StudyNook – My Listings";
  }, []);

  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      setLoading(false);
      return;
    }
    apiFetch("/api/rooms/mine/list")
      .then(setRooms)
      .catch(() => setRooms([]))
      .finally(() => setLoading(false));
  }, [isPending, session]);

  if (isPending || loading) return <Spinner />;

  if (!session?.user) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg text-gray-600">Please log in to view your listings.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">My Listings</h1>

      <div className="mt-10">
        {rooms.length === 0 ? (
          <p className="text-center text-gray-500">You haven't listed any rooms yet.</p>
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