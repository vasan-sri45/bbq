"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function ProductModal({ onClose, product, onAddToCart }) {
  const [qty, setQty] = useState(1);

  // ✅ store selections dynamically
  const [selectedOptions, setSelectedOptions] = useState({});

  // ✅ FIXED PRICE
  const basePrice = product?.price || product?.basePrice || 0;

  // ✅ HANDLE OPTION CHANGE
  const handleOptionChange = (optionIndex, value, type) => {
    setSelectedOptions((prev) => {
      const updated = { ...prev };

      if (type === "single") {
        updated[optionIndex] = value;
      } else {
        const arr = updated[optionIndex] || [];

        if (arr.includes(value)) {
          updated[optionIndex] = arr.filter((v) => v !== value);
        } else {
          updated[optionIndex] = [...arr, value];
        }
      }

      return updated;
    });
  };

  // ✅ VALIDATION
  const validateOptions = () => {
    for (let i = 0; i < (product?.options || []).length; i++) {
      const opt = product.options[i];

      if (opt.required) {
        const val = selectedOptions[i];

        if (!val || (Array.isArray(val) && val.length === 0)) {
          alert(`${opt.title} is required`);
          return false;
        }
      }
    }
    return true;
  };

  // ✅ CALCULATE TOTAL (WITH OPTION PRICES)
  const calculateTotal = () => {
    let total = basePrice;

    product?.options?.forEach((opt, i) => {
      const selected = selectedOptions[i];

      if (!selected) return;

      if (Array.isArray(selected)) {
        selected.forEach((val) => {
          const item = opt.items.find((it) => it.name === val);
          total += item?.price || 0;
        });
      } else {
        const item = opt.items.find((it) => it.name === selected);
        total += item?.price || 0;
      }
    });

    return (total * qty).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-xl rounded-2xl flex flex-col max-h-[90vh] text-black">

        {/* HEADER */}
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-100 p-2 rounded-lg"
          >
            <X />
          </button>

          <h2 className="text-xl font-semibold">{product?.name}</h2>

          <p className="text-red-500 text-sm mt-1">
            £{basePrice.toFixed(2)}
          </p>
        </div>

        {/* OPTIONS */}
        <div className="p-6 overflow-y-auto flex-1">

          {product?.options?.map((opt, i) => (
            <div key={i} className="mb-6">

              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{opt.title}</h3>

                {opt.required && (
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    Required
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500 mb-3">
                {opt.description}
              </p>

              <div className="space-y-2">

                {opt.items.map((item, j) => {
                  const selected = selectedOptions[i];

                  const isChecked =
                    opt.type === "single"
                      ? selected === item.name
                      : selected?.includes(item.name);

                  return (
                    <label key={j} className="flex items-center gap-3">

                      <input
                        type={opt.type === "single" ? "radio" : "checkbox"}
                        name={`option-${i}`}
                        checked={isChecked || false}
                        onChange={() =>
                          handleOptionChange(i, item.name, opt.type)
                        }
                      />

                      <span>
                        {item.name}
                        {item.price > 0 && (
                          <span className="text-red-500 ml-2">
                            +£{item.price}
                          </span>
                        )}
                      </span>

                    </label>
                  );
                })}

              </div>
            </div>
          ))}

        </div>

        {/* FOOTER */}
        {/* <div className="p-4 bg-white rounded-2xl">

          <div className="flex items-center gap-3">

            
            <div className="flex items-center bg-gray-200 rounded-xl px-3 py-2 gap-4">
              <button
                onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                className={`text-lg font-bold ${qty === 1 ? "opacity-40" : ""}`}
              >
                -
              </button>

              <span className="font-semibold">{qty}</span>

              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="text-lg font-bold"
              >
                +
              </button>
            </div>

           
            <button
              onClick={() => {
                if (!validateOptions()) return;

                const cartItem = {
                  name: product.name,
                  price: basePrice,
                  quantity: qty,
                  options: selectedOptions,
                };

                console.log("Cart:", cartItem);

                onAddToCart(cartItem);
                onClose();
              }}
              className="flex-1 bg-gray-200 rounded-xl px-4 py-3 flex items-center justify-between hover:bg-gray-300 transition"
            >
              <span className="font-medium">
                Add {qty} to order
              </span>

              <span className="font-semibold">
                £{calculateTotal()}
              </span>
            </button>

          </div>

        </div> */}

      </div>
    </div>
  );
}