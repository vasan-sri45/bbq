"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function FilterModal({ onClose }) {
  const [veg, setVeg] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(8);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 md:p-0">

      {/* 🔲 Modal */}
      <div className="bg-white w-full max-w-xl rounded-2xl p-6 relative text-black">

        {/* ❌ Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 p-2 rounded-lg"
        >
          <X />
        </button>

        {/* 🔥 Title */}
        <h2 className="text-xl font-semibold mb-6">Filters</h2>

        {/* ================= DIET ================= */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Dietary preferences</h3>
            <ChevronDown />
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={veg}
              onChange={() => setVeg(!veg)}
            />
            🌱 Vegetarian
          </label>
        </div>

        {/* ================= PRICE ================= */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Price</h3>
            <ChevronDown />
          </div>

          {/* Range Inputs */}
          <div className="flex flex-col gap-4">

            <input
              type="range"
              min="0"
              max="20"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="accent-red-500"
            />

            <input
              type="range"
              min="0"
              max="20"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="accent-red-500"
            />

          </div>

          {/* Min/Max Boxes */}
          <div className="flex gap-4 mt-4">
            <div className="flex-1 bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Min Price</p>
              <p className="font-semibold">{min}</p>
            </div>

            <div className="flex-1 bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Max price</p>
              <p className="font-semibold">{max}</p>
            </div>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="flex gap-4 mt-8">
          
          <button
            onClick={() => {
              setVeg(false);
              setMin(0);
              setMax(20);
            }}
            className="flex-1 bg-gray-200 py-3 rounded-xl"
          >
            Reset
          </button>

          <button className="flex-1 bg-red-600 text-white py-3 rounded-xl">
            Apply filter (49 items)
          </button>

        </div>

      </div>
    </div>
  );
}