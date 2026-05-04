"use client";
import { useState } from "react";

export default function CouponCard({
  title,
  code,
  discount,
}: {
  title: string;
  code: string;
  discount: number;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Up to {discount}% OFF</h3>

      <p className="text-sm text-gray-500 mb-3">{title}</p>

      <button
        onClick={() => setShow(true)}
        className="w-full bg-[var(--primary)] text-white py-2 rounded relative overflow-hidden"
      >
        {show ? code : "Reveal Code"}

        <span className="absolute right-0 top-0 bg-yellow-400 text-black px-2 py-2 transform translate-x-full hover:translate-x-0 transition">
          View
        </span>
      </button>

      <p className="text-xs mt-2 text-gray-500">🔥 Used 200+ times today</p>
    </div>
  );
}
