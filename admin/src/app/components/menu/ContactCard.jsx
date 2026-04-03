"use client";

import { MapPin, Phone } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="bg-gray-200 rounded-xl p-6 max-w-6xl text-black">

      {/* 🔥 Title */}
      <h2 className="font-semibold text-lg mb-4">
        Barbecue Grill
      </h2>

      {/* 📍 Address */}
      <div className="flex items-center gap-3 mb-3">
        <MapPin className="w-5 h-5 text-black" />
        <p className="text-gray-800">
          124 High St, Peterborough PE2 8DP
        </p>
      </div>

      {/* 📞 Phone */}
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-black" />
        <p className="text-gray-800">
          01733813807
        </p>
      </div>

    </div>
  );
}