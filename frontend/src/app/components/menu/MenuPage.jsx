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
  // const [search, setSearch] = useState("");

  // ✅ GLOBAL FILTER STATE
  const [filters, setFilters] = useState({
    veg: false,
    min: 0,
    max: 20,
  });

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

              <SearchBar  onFilterClick={() => setOpenFilter(true)} />

              <ProductList
                filters={filters} // ✅ pass filters
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

      {/* ✅ FILTER MODAL */}
      {openFilter && (
        <FilterModal
          filters={filters}
          setFilters={setFilters}
          onClose={() => setOpenFilter(false)}
        />
      )}
    </div>
  );
}