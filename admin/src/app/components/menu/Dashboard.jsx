"use client";

import CategorySidebar from "./CategorySidebar";
import SearchBar from "./SearchBar";
import OrderPanel from "./AddMenu";
import OrderMenu from "./OrderMenu";
import ProductList from "./ProductList";
import FilterModal from "./FilterModel";
import { useState } from "react";

export default function MenuPage() {

  const [search, setSearch] = useState("");
   const [openFilter, setOpenFilter] = useState(false);
  
   const user =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("bc_user"))
    : null;

const role = user?.role;
  

  return (
    <div className="bg-gray-100 overflow-x-hidden">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4">

        {/* ================= LEFT ================= */}
        <div className="flex-1 flex flex-col lg:border-r border-gray-300 ">

          <div className="flex flex-col md:flex-row">

            {/* 🧭 SIDEBAR */}
            <div className="hidden md:block w-64 p-4">
              <CategorySidebar />
            </div>

            {/* 📦 CONTENT */}
            <div className="flex-1 p-4 md:p-6">

              <SearchBar search={search} setSearch={setSearch}/>

              {/* 📱 Mobile Categories */}
              <div className="md:hidden overflow-x-auto my-4">
                <div className="flex gap-3">
                  {["Popular", "Meals", "Kebabs", "Burgers", "Pizza", "Drinks"].map((c, i) => (
                    <button
                      key={i}
                      className="whitespace-nowrap px-4 py-2 bg-white rounded-full shadow text-sm"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* 📦 PRODUCTS */}
              <ProductList
                search={search}
                onAddToCart={(item) => {
                  setCart((prev) => [...prev, item]);
                }}
              />
            </div>
          </div>
          
        </div>

        {/* ================= RIGHT ================= */}
        <div className="w-full lg:w-[420px] h-[530px] border-t lg:border-t-0 lg:sticky lg:top-0 overflow-y-auto">
         
          {role === "admin" ? (
            <OrderPanel />
          ) : (
            <OrderMenu />
          )}
        </div>

      </div>

      {/* 🔥 FILTER MODAL */}
      {openFilter && (
        <FilterModal onClose={() => setOpenFilter(false)} />
      )}
    </div>
  );
}