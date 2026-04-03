"use client";

import { MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const hours = [
    { day: "Monday", time: "11:00 - 22:00" },
    { day: "Tuesday", time: "11:00 - 22:00" },
    { day: "Wednesday", time: "11:00 - 22:00" },
    { day: "Thursday", time: "11:00 - 22:00" },
    { day: "Friday", time: "11:00 - 22:00" },
    { day: "Saturday", time: "11:00 - 22:00" },
    { day: "Sunday", time: "11:00 - 22:00" },
  ];

  return (
    <section id="contact" className="py-5 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Opening Hours ================= */}
        <div className="bg-gray-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-6 text-black">Opening Hours</h2>

          <div className="grid grid-cols-2 font-semibold mb-2">
            <span></span>
            <span className="text-center text-black">Pick-up</span>
          </div>

          {hours.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 px-3 py-2 rounded ${
                item.day === "Monday" ? "bg-red-200" : ""
              }`}
            >
              <span className="font-medium text-black">{item.day}</span>
              <span className="text-center text-black">{item.time}</span>
            </div>
          ))}
        </div>

        {/* ================= Contact ================= */}
        <h2 className="text-xl font-semibold mb-6 text-black">Contact Us</h2>

        <div className="bg-gray-200 rounded-xl p-6 max-w-md text-black mb-12">
          <h3 className="font-semibold mb-4">Barbecue Grill</h3>

          <div className="flex items-start gap-3 mb-3">
            <MapPin className="w-5 h-5 mt-1" />
            <p>124 High St, Peterborough PE2 8DP</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <p>01733813807</p>
          </div>
        </div>

      </div>
    </section>
  );
}