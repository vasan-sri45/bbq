"use client";

import { MapPin, Clock, Truck, Timer, BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {

  const router = useRouter();

  const navigateMenuList = () => {
    router.push("/menus");
  };

  return (
    <section className="relative h-screen w-full">

      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg')",
        }}
      />

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🔥 Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Barbecue Grill
        </h1>

        <button
         onClick={navigateMenuList}
         className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-lg font-semibold mb-6" 
         >
          Order Now
        </button>

        {/* App Buttons */}
        {/* <div className="flex gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-12"
          />
        </div> */}
      </div>

      {/* 🔥 Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>124 High St, Peterborough PE2 8DP</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Closed for delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <Truck size={16} />
            <span>Delivery time 20 min</span>
          </div>

          <div className="flex items-center gap-2">
            <Timer size={16} />
            <span>Takeaway time 10 min</span>
          </div>

          <div className="flex items-center gap-2">
            <BadgeCheck size={16} />
            <span>Halal</span>
          </div>

        </div>
      </div>

    </section>
  );
}