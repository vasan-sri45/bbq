// "use client";

// import { Heart } from "lucide-react";
// import { useState } from "react";

// export default function CategorySidebar() {
//   const [active, setActive] = useState("Most popular products");

//   const categories = [
//     "Most popular products",
//     "Meal Deals",
//     "Kebabs",
//     "Kebabs in Pitta",
//     "Burgers",
//     "Grilled Chicken",
//     "Pizzas",
//     "Curry Dishes",
//     "Extras",
//     "Drinks",
//   ];

//   return (
//     <div className="w-64 bg-gray-100 p-4">

//       {/* Vertical Line */}
//       <div className="relative pl-4 border-l-2 border-gray-300">

//         {categories.map((item, index) => {
//           const isActive = active === item;

//           return (
//             <div
//               key={index}
//               onClick={() => setActive(item)}
//               className={`relative cursor-pointer py-3 text-sm font-medium transition
//                 ${isActive ? "text-red-500" : "text-gray-600 hover:text-black"}
//               `}
//             >
              
//               {/* Active Indicator */}
//               {isActive && (
//                 <span className="absolute -left-[18px] top-3 h-6 w-[3px] bg-red-500 rounded" />
//               )}

//               {/* Icon for first item */}
//               <div className="flex items-center gap-2">
//                 {item === "Most popular products" && (
//                   <Heart size={14} className="text-red-500" />
//                 )}
//                 {item}
//               </div>

//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// }



"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export default function CategorySidebar() {
  const [active, setActive] = useState("Most popular products");

  const categories = [
    "Most popular products",
    "Meal Deals",
    "Kebabs",
    "Kebabs in Pitta",
    "Burgers",
    "Grilled Chicken",
    "Pizzas",
    "Curry Dishes",
    "Extras",
    "Drinks",
  ];

  return (
    <div className="w-full md:w-64 bg-gray-100 p-4">
      <div className="relative pl-4 border-l-2 border-gray-300">
        {categories.map((item, index) => {
          const isActive = active === item;

          return (
            <div
              key={index}
              onClick={() => setActive(item)}
              className={`relative cursor-pointer py-3 text-sm font-medium
                ${isActive ? "text-red-500" : "text-gray-600 hover:text-black"}
              `}
            >
              {isActive && (
                <span className="absolute -left-[18px] top-3 h-6 w-[3px] bg-red-500 rounded" />
              )}

              <div className="flex items-center gap-2">
                {item === "Most popular products" && (
                  <Heart size={14} className="text-red-500" />
                )}
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}