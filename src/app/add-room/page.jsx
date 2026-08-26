"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";

const AMENITY_OPTIONS = ["Whiteboard", "Projector", "Wi-Fi", "Power Outlets", "Quiet Zone", "Air Conditioning"];

export default function AddRoomPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", description: "", image: "", floor: "", capacity: "", hourlyRate: "",
  });
  const [amenities, setAmenities] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const toggleAmenity = (a) => {
    setAmenities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiFetch("/api/rooms", {
        method: "POST",
        body: JSON.stringify({ ...form, amenities }),
      });
      toast.success("Room added successfully");
      router.push("/my-listings");
    } catch (err) {
      toast.error(err.message || "Failed to add room");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-black">Add a Study Room</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <input required placeholder="Room name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <textarea required placeholder="Description" value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={4}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <input required placeholder="Image URL" value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <div className="grid grid-cols-3 gap-4">
          <input required placeholder="Floor (e.g. 3rd Floor)" value={form.floor}
            onChange={(e) => setForm({ ...form, floor: e.target.value })}
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
          <input required type="number" min="1" placeholder="Capacity" value={form.capacity}
            onChange={(e) => setForm({ ...form, capacity: e.target.value })}
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
          <input required type="number" min="1" placeholder="Hourly rate ($)" value={form.hourlyRate}
            onChange={(e) => setForm({ ...form, hourlyRate: e.target.value })}
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

        <button type="submit" disabled={submitting}
          className="mt-2 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 disabled:opacity-50">
          {submitting ? "Adding..." : "Add Room"}
        </button>
      </form>
    </div>
  );
}