"use client";

import { SlidersHorizontal } from "lucide-react";

export default function SearchBar({ onFilterClick }) {
  return (
    <div className="w-full flex gap-3">

      <div className="flex-1 bg-gray-200 rounded-xl px-4 py-3">
        <p className="text-xs text-gray-500 mb-1">
          Search dish...
        </p>

        <input
          type="text"
          placeholder="ex. 1/2 Chicken with Rice"
          className="w-full bg-transparent outline-none text-gray-700"
        />
      </div>

      <button className="bg-gray-200 rounded-xl px-4 flex items-center justify-center" onClick={onFilterClick}>
        <SlidersHorizontal className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}


