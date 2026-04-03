// "use client";

// import CategorySidebar from "./CategorySidebar";
// import SearchBar from "./SearchBar";
// import OrderPanel from "./OrderPanel";
// import ProductList from "./ProductList";
// import ContactCard from "../contact/ContactCard";
// import FilterModal from "./FilterModel";
// import { useState } from "react";

// export default function MenuPage() {

//   const [openFilter, setOpenFilter] = useState(false);
//   const [cart, setCart] = useState([]);

//   console.log(cart);

//   return (
//     <div className="bg-gray-100 min-h-screen overflow-x-hidden">

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

//         {/* ================= LEFT ================= */}
//         <div className="flex-1 flex flex-col border-r border-gray-300">

//           {/* 🔥 TOP SECTION */}
//           <div className="flex flex-col md:flex-row">

//             {/* 🧭 SIDEBAR */}
//             <div className="hidden md:block w-full md:w-64 p-4">
//               <CategorySidebar />
//             </div>

//             {/* 📦 CONTENT */}
//             <div className="flex-1 p-4 md:p-6">

//               {/* 🔍 Search */}
//               <SearchBar onFilterClick={() => setOpenFilter(true)} />

//               {/* 📱 Mobile Categories */}
//               <div className="md:hidden overflow-x-auto my-4">
//                 <div className="flex gap-3">
//                   {["Popular", "Meals", "Kebabs", "Burgers", "Pizza", "Drinks"].map((c, i) => (
//                     <button
//                       key={i}
//                       className="whitespace-nowrap px-4 py-2 bg-white rounded-full shadow text-sm"
//                     >
//                       {c}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* 📦 Products */}
//               <ProductList 
//                 onAddToCart={(item) => {
//                   setCart((prev) => [...prev, item]);
//                 }}
//               />
//             </div>
//           </div>

//           {/* 📍 Contact */}
//           <div className="p-4 md:p-6 border-t">
//             <ContactCard />
//           </div>
//         </div>

//         {/* ================= RIGHT ================= */}
//         <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-300 lg:sticky lg:top-0 h-fit">
//           <OrderPanel cart={cart}/>
//         </div>

//       </div>

//        {/* 🔥 FILTER MODAL */}
//       {openFilter && (
//         <FilterModal onClose={() => setOpenFilter(false)} />
//       )}
//     </div>
//   );
// }


"use client";

import CategorySidebar from "./CategorySidebar";
import SearchBar from "./SearchBar";
import OrderPanel from "./OrderPanel";
import ProductList from "./ProductList";
import ContactCard from "../contact/ContactCard";
import FilterModal from "./FilterModel";
import { useState } from "react";

export default function MenuPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        {/* LEFT */}
        <div className="flex-1 flex flex-col border-r border-gray-300">

          <div className="flex flex-col md:flex-row">

            <div className="hidden md:block w-64 p-4">
              <CategorySidebar />
            </div>

            <div className="flex-1 p-4 md:p-6">

              <SearchBar onFilterClick={() => setOpenFilter(true)} />

              {/* Products */}
              <ProductList
                onAddToCart={(item) => {
                  setCart((prev) => {
                    const existingIndex = prev.findIndex(
                      (i) =>
                        i.productId === item.productId &&
                        JSON.stringify(i.options) === JSON.stringify(item.options)
                    );

                    if (existingIndex > -1) {
                      const updated = [...prev];
                      updated[existingIndex].quantity += item.quantity;
                      updated[existingIndex].price += item.price;
                      return updated;
                    }

                    return [...prev, item];
                  });
                }}
              />
            </div>
          </div>

          <div className="p-4 md:p-6 border-t">
            <ContactCard />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-80 border-l border-gray-300 lg:sticky lg:top-0 h-fit">
          <OrderPanel cart={cart} setCart={setCart} />
        </div>
      </div>

      {openFilter && (
        <FilterModal onClose={() => setOpenFilter(false)} />
      )}
    </div>
  );
}