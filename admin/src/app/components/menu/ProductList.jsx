

"use client";

import { useState, useMemo } from "react";
import { Heart } from "lucide-react";
import ProductModal from "./ProductModel";
import { useGetProducts } from "../../hooks/useMenuMutations";

export default function ProductList({ onAddToCart, search = "" }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data, isLoading } = useGetProducts();

  // ✅ Extract API products
  const products = data?.data || [];

  // 🔥 FILTER (optimized)
  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  if (isLoading) {
    return <p className="p-6">Loading products...</p>;
  }

  return (
    <div className="bg-gray-100 py-6 w-full">

      <h2 className="flex items-center gap-2 font-semibold mb-4 text-black">
        <Heart className="text-red-500" size={18} />
        Most popular products
      </h2>

      <div className="bg-white rounded-md h-[510px] overflow-y-auto">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item._id}
              onClick={() => {
                setSelectedProduct(item);
                setOpenModal(true);
              }}
              className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
            >
              <h3 className="font-semibold text-black">
                {item.name}
              </h3>

              <p className="text-red-500 text-sm mt-1">
                £{(item.price ?? item.basePrice ?? 0).toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p className="p-6 text-center text-gray-500">
            No products found 😢
          </p>
        )}

      </div>

      {openModal && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setOpenModal(false)}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
}