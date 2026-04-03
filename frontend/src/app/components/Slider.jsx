"use client";

import { useEffect, useRef } from "react";
import { Utensils, ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";

export default function PopularProducts() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const products = [
    { name: "1/2 Chicken", price: "£7.43" },
    { name: "Doner Naan Chips & Cheese", price: "£12.83" },
    { name: "Chicken Kebab (Naan)", price: "£9.45" },
    { name: "Doner & Chips", price: "£9.45" },
    { name: "1/2 Chicken", price: "£7.43" },
    { name: "Doner Naan Chips & Cheese", price: "£12.83" },
    { name: "Chicken Kebab (Naan)", price: "£9.45" },
    { name: "Doner & Chips", price: "£9.45" },
  ];

  // ✅ GSAP Animation
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  // ✅ Scroll Functions
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-xl font-semibold mb-6 text-black">
          Our most popular products
        </h2>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10  text-black"
          >
            <ChevronLeft />
          </button>

          {/* 🔥 SLIDER (SCROLLBAR REMOVED) */}
          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
            style={{
              scrollbarWidth: "none",      // Firefox
              msOverflowStyle: "none",     // IE
            }}
          >
            {products.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="min-w-[300px] snap-start bg-white rounded-xl shadow-md flex overflow-hidden"
              >
                {/* Left */}
                <div className="p-4 flex flex-col justify-between w-2/3">
                  <h3 className="font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-red-500 font-semibold mt-4">
                    {item.price}
                  </span>
                </div>

                {/* Right */}
                <div className="w-1/3 bg-gray-100 flex items-center justify-center">
                  <Utensils className="w-10 h-10 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-black"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {products.map((_, i) => (
            <div key={i} className="h-1 w-6 bg-gray-300 rounded" />
          ))}
        </div>

      </div>
    </section>
  );
}