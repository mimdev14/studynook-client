"use client";

import { useState } from "react";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import { AMENITY_OPTIONS } from "@/lib/constants";

export default function EditRoomModal({ room, onClose, onUpdated }) {
  const [form, setForm] = useState({
    name: room.name,
    description: room.description,
    image: room.image,
    floor: room.floor,
    capacity: room.capacity,
    hourlyRate: room.hourlyRate,
  });
  const [amenities, setAmenities] = useState(room.amenities || []);
  const [submitting, setSubmitting] = useState(false);

  const toggleAmenity = (a) => {
    setAmenities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiFetch(`/api/rooms/${room._id}`, {
        method: "PUT",
        body: JSON.stringify({ ...form, amenities }),
      });
      toast.success("Room updated successfully");
      onUpdated({ ...room, ...form, amenities });
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to update room");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-6 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-black">Edit Room</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-black">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          <input required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Room name"
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

          <textarea required value={form.description} rows={4}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

          <input required value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            placeholder="Image URL"
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

          <div className="grid grid-cols-3 gap-4">
            <input required value={form.floor}
              onChange={(e) => setForm({ ...form, floor: e.target.value })}
              placeholder="Floor"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
            <input required type="number" min="1" value={form.capacity}
              onChange={(e) => setForm({ ...form, capacity: e.target.value })}
              placeholder="Capacity"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
            <input required type="number" min="1" value={form.hourlyRate}
              onChange={(e) => setForm({ ...form, hourlyRate: e.target.value })}
              placeholder="Hourly rate ($)"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-black">Amenities</p>
            <div className="flex flex-wrap gap-3">
              {AMENITY_OPTIONS.map((a) => (
                <label key={a} className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm">
                  <input type="checkbox" checked={amenities.includes(a)} onChange={() => toggleAmenity(a)} />
                  {a}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-2 flex gap-3">
            <button type="button" onClick={onClose}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-black hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" disabled={submitting}
              className="flex-1 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-60">
              {submitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}