// import React from 'react';
// import {useGetCarts} from "../../hooks/useCartMutations";

// const OrderMenu = () => {

//   const { data, isLoading } = useGetCarts();
  
//     // ✅ Extract API products
//     const products = data?.data || [];
//     console.log(products);
  
//   return (
//     <div>OrderMenu</div>
//   )
// }

// export default OrderMenu

"use client";

import React from "react";
import { useGetCarts } from "../../hooks/useCartMutations";

const OrderMenu = () => {
  const { data, isLoading } = useGetCarts();

  const carts = data?.cart || [];
  const items = carts[0]?.items || [];

  console.log("Items:", items);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">

      <h2 className="font-bold mb-3">Orders</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No orders</p>
      ) : (
        items.map((item, i) => (
          <div key={i} className="bg-white p-3 mb-2 rounded shadow">

            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
            </div>

            {/* ✅ OPTIONS FIX */}
            <div className="text-sm text-gray-500 mt-1">
              {item.options?.map((optObj, idx) => {
                return Object.values(optObj).map((opt, i) => (
                  <p key={i}>
                    {Array.isArray(opt) ? opt.join(", ") : opt}
                  </p>
                ));
              })}
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default OrderMenu;