"use client";

import { useState, useMemo } from "react";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";

const HOURS = Array.from({ length: 13 }, (_, i) => 8 + i); // 08:00 - 20:00

function formatHour(h) {
  return `${String(h).padStart(2, "0")}:00`;
}

export default function BookingModal({ room, onClose, onBooked }) {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const startHour = startTime ? Number(startTime.split(":")[0]) : null;
  const endOptions = HOURS.filter((h) => startHour !== null && h > startHour);

  const totalCost = useMemo(() => {
    if (!startTime || !endTime) return 0;
    const sh = Number(startTime.split(":")[0]);
    const eh = Number(endTime.split(":")[0]);
    return (eh - sh) * room.hourlyRate;
  }, [startTime, endTime, room.hourlyRate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !startTime || !endTime) {
      toast.error("Please select a date and time range");
      return;
    }

    setSubmitting(true);
    try {
      await apiFetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify({ roomId: room._id, date, startTime, endTime, note }),
      });
      toast.success("Room booked successfully!");
      onBooked?.();
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to book room");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-6 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-black">Book {room.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-black">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-black">Date</label>
            <input
              type="date"
              required
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-black">Start Time</label>
              <select
                required
                value={startTime}
                onChange={(e) => { setStartTime(e.target.value); setEndTime(""); }}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none"
              >
                <option value="">Select</option>
                {HOURS.map((h) => (
                  <option key={h} value={formatHour(h)}>{formatHour(h)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-black">End Time</label>
              <select
                required
                disabled={!startTime}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none disabled:bg-gray-100"
              >
                <option value="">Select</option>
                {endOptions.map((h) => (
                  <option key={h} value={formatHour(h)}>{formatHour(h)}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black">Special Note (optional)</label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none"
            />
          </div>

          <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm font-semibold text-black">
            Total Cost: ${totalCost}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-60"
          >
            {submitting ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}