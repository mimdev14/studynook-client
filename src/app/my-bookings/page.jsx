"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSession } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";
import Spinner from "@/components/Spinner";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";

export default function MyBookingsPage() {
  const { data: session, isPending } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelTarget, setCancelTarget] = useState(null);
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    document.title = "StudyNook – My Bookings";
  }, []);

  const loadBookings = () => {
    apiFetch("/api/bookings/mine")
      .then(setBookings)
      .catch(() => setBookings([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      setLoading(false);
      return;
    }
    loadBookings();
  }, [isPending, session]);

  const handleCancel = async () => {
    if (!cancelTarget) return;
    setCancelling(true);
    try {
      await apiFetch(`/api/bookings/${cancelTarget}/cancel`, { method: "PATCH" });
      toast.success("Booking cancelled");
      setBookings((prev) =>
        prev.map((b) => (b._id === cancelTarget ? { ...b, status: "cancelled" } : b))
      );
      setCancelTarget(null);
    } catch (err) {
      toast.error(err.message || "Failed to cancel booking");
    } finally {
      setCancelling(false);
    }
  };

  if (isPending || loading) return <Spinner />;

  if (!session?.user) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg text-gray-600">Please log in to view your bookings.</p>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">My Bookings</h1>

      <div className="mt-10">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">You have no bookings yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {bookings.map((b) => {
              const canCancel = b.status === "confirmed" && b.date >= today;
              return (
                <div
                  key={b._id}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img src={b.roomImage} alt={b.roomName} className="h-16 w-16 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold text-black">{b.roomName}</p>
                      <p className="text-sm text-gray-600">
                        {b.date} · {b.startTime}–{b.endTime} · ${b.totalCost}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        b.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {b.status}
                    </span>
                    {canCancel && (
                      <button
                        onClick={() => setCancelTarget(b._id)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-black hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <DeleteConfirmModal
        open={!!cancelTarget}
        onCancel={() => setCancelTarget(null)}
        onConfirm={handleCancel}
        deleting={cancelling}
        title="Cancel this booking?"
      />
    </div>
  );
}