"use client";

import { Clock, Timer, BadgeCheck } from "lucide-react";

export default function HeroBottomLayout() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden">

      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg')",
        }}
      />

      {/* 🔥 Gradient Overlay (bottom fade) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* 🔥 Content */}
      <div className="relative z-10 h-full flex items-end justify-between p-6 text-white">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-2xl font-semibold mb-1">
            Barbecue Grill
          </h1>

          <p className="text-sm text-gray-200 mb-4">
            124 High St, Peterborough PE2 8DP
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 text-sm">

            <div className="flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-full">
              <Clock size={14} />
              <span>Open for pick-up 11:00 - 22:00</span>
            </div>

            <div className="flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-full">
              <Timer size={14} />
              <span>Takeaway time 10 min</span>
            </div>

            <div className="flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-full">
              <BadgeCheck size={14} />
              <span>Halal</span>
            </div>

          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div>
          <button className="bg-black hover:bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">
            Browse menu
          </button>
        </div>

      </div>
    </section>
  );
}