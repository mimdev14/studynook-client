"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";
import Spinner from "@/components/Spinner";
import EditRoomModal from "@/components/EditRoomModal";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";

export default function RoomDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    apiFetch(`/api/rooms/${id}`)
      .then(setRoom)
      .catch(() => setRoom(null))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (room) document.title = `StudyNook – ${room.name}`;
  }, [room]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await apiFetch(`/api/rooms/${id}`, { method: "DELETE" });
      toast.success("Room deleted successfully");
      router.push("/my-listings");
    } catch (err) {
      toast.error(err.message || "Failed to delete room");
      setDeleting(false);
    }
  };

  if (loading) return <Spinner />;
  if (!room) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg text-gray-600">Room not found.</p>
      </div>
    );
  }

  const isOwner = user?.id === room.ownerId;

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <img src={room.image} alt={room.name} className="h-80 w-full object-cover" />
      </div>

      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-black">{room.name}</h1>
          <p className="mt-2 text-sm text-gray-500">{room.floor} · Booked {room.bookingCount || 0} times</p>
        </div>
        <div className="text-2xl font-bold text-black">
          ${room.hourlyRate}<span className="text-sm font-normal text-gray-500">/hr</span>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600">{room.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {room.amenities?.map((a) => (
          <span key={a} className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
            {a}
          </span>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-600">Capacity: {room.capacity} people</div>

      <div className="mt-10 flex flex-wrap gap-3">
        {!user ? (
          <a href="/auth/login"
            className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900">
            Login to Book
          </a>
        ) : (
          <button
            onClick={() => toast.info("Booking form coming next")}
            className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900"
          >
            Book Now
          </button>
        )}

        {isOwner && (
          <>
            <button onClick={() => setShowEdit(true)}
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-black hover:bg-gray-50">
              Edit
            </button>
            <button onClick={() => setShowDelete(true)}
              className="rounded-lg border border-red-200 px-6 py-3 text-sm font-semibold text-red-600 hover:bg-red-50">
              Delete
            </button>
          </>
        )}
      </div>

      {showEdit && (
        <EditRoomModal room={room} onClose={() => setShowEdit(false)} onUpdated={setRoom} />
      )}

      <DeleteConfirmModal
        open={showDelete}
        onCancel={() => setShowDelete(false)}
        onConfirm={handleDelete}
        deleting={deleting}
      />
    </div>
  );
}