"use client";

import axios from "axios";
import { useState } from "react";
import { getGuestId } from "../../utils/getGuestId";

export default function OrderPanel({ cart, setCart }) {
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // ➕ Increase quantity
  const increaseQty = (index) => {
    setCart((prev) => {
      const updated = [...prev];
      const unitPrice = updated[index].price / updated[index].quantity;

      updated[index].quantity += 1;
      updated[index].price += unitPrice;

      return updated;
    });
  };

  // ➖ Decrease quantity
  const decreaseQty = (index) => {
    setCart((prev) => {
      const updated = [...prev];

      if (updated[index].quantity === 1) return updated;

      const unitPrice = updated[index].price / updated[index].quantity;

      updated[index].quantity -= 1;
      updated[index].price -= unitPrice;

      return updated;
    });
  };

  // ❌ Remove item
  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // 💳 Checkout
  const handleCheckout = async () => {
    if (!cart.length) return;

    try {
      setLoading(true);

      const guestId = getGuestId();

      await axios.post("http://localhost:4500/api/cart/add", {
        guestId,
        items: cart,
        totalAmount: total,
      });

      alert("Order placed successfully 🚀");

      setCart([]); // clear cart
    } catch (err) {
      console.error(err);
      alert("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 h-full">
      <h3 className="font-semibold mb-4 text-black">Your order</h3>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="bg-white p-4 mb-3 rounded-xl shadow-sm">

              {/* Header */}
              <div className="flex justify-between text-black font-medium">
                <span>{item.name}</span>
                <button
                  onClick={() => removeItem(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>

              {/* Options */}
            
              <div className="text-sm text-gray-500 mt-1">
  {Array.isArray(item.options) ? (
    item.options.map((opt, idx) => {
      if (!opt || (Array.isArray(opt) && opt.length === 0)) return null;

      return (
        <p key={idx}>
          {Array.isArray(opt) ? opt.join(", ") : opt}
        </p>
      );
    })
  ) : (
    <p className="text-red-400">Invalid options</p>
  )}
</div>

 {/* Extras */}
           
              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => decreaseQty(i)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(i)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Price */}
              <div className="text-red-500 mt-2 font-semibold">
                £{item.price.toFixed(2)}
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="font-bold mt-4 text-black text-lg">
            Total: £{total.toFixed(2)}
          </div>

          {/* Checkout */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-2 rounded-xl mt-3 transition"
          >
            {loading ? "Processing..." : "Checkout"}
          </button>
        </>
      )}
    </div>
  );
}