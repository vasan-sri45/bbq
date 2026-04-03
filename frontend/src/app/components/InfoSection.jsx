"use client";

import { MapPin, Phone, ChevronRight } from "lucide-react";

export default function InfoSection() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="max-w-6xl mx-auto mt-28 py-6 px-4 overflow-x-hidden">

      {/* 🔥 Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-black">
        Barbecue Grill
      </h1>

      {/* 🔥 Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ================= LEFT ================= */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="font-semibold mb-4 text-lg text-black">
            Opening Hours
          </h2>

          <div className="space-y-2 text-black">
            {days.map((day, i) => (
              <div
                key={i}
                className={`flex justify-between items-center px-3 py-3 rounded
                  ${
                    day === today
                      ? "bg-red-200"
                      : i % 2 === 1
                      ? "bg-gray-100"
                      : ""
                  }
                `}
              >
                <span className="font-medium">{day}</span>
                <span className="text-sm">11:00 - 22:00</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-6">

          {/* Address */}
          <div className="bg-white rounded-xl shadow-sm p-4 text-black">
            <h3 className="font-semibold mb-3">Address</h3>

            <div className="flex items-start justify-between gap-3 bg-gray-100 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>

                <span className="text-sm leading-relaxed">
                  124 High St, Peterborough PE2 8DP
                </span>
              </div>

              <ChevronRight />
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl shadow-sm p-4 text-black">
            <h3 className="font-semibold mb-3">Got questions?</h3>

            <div className="flex items-center justify-between gap-3 bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>

                <span className="text-sm">01733813807</span>
              </div>

              <ChevronRight />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}