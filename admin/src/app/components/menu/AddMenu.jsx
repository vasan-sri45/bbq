"use client";

import { useState } from "react";
import { useAddMenu } from "../../hooks/useMenuMutations";

export default function AddMenu() {
  const { mutate, isPending } = useAddMenu();

  const [form, setForm] = useState({
    name: "",
    variety: "",
    basePrice: "",
    price: "",
    badge: "",
    options: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOption = () => {
    setForm({
      ...form,
      options: [
        ...form.options,
        {
          title: "",
          type: "single",
          required: false,
          items: [],
        },
      ],
    });
  };

  const addItem = (index) => {
    const updated = [...form.options];
    updated[index].items.push({ name: "", price: 0 });
    setForm({ ...form, options: updated });
  };

  const handleOptionChange = (index, field, value) => {
    const updated = [...form.options];
    updated[index][field] = value;
    setForm({ ...form, options: updated });
  };

  const handleItemChange = (optIndex, itemIndex, field, value) => {
    const updated = [...form.options];
    updated[optIndex].items[itemIndex][field] = value;
    setForm({ ...form, options: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(form, {
      onSuccess: () => {
        alert("Product Created ✅");
        setForm({
          name: "",
          variety: "",
          basePrice: "",
          price: "",
          badge: "",
          options: [],
        });
      },
      onError: () => {
        alert("Error creating product ❌");
      },
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto">

      <h2 className="text-xl font-semibold mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* BASIC */}
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="variety"
          placeholder="Category"
          value={form.variety}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="basePrice"
          placeholder="Base Price"
          value={form.basePrice}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="price"
          placeholder="Final Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* OPTIONS */}
        <div>
          <h3 className="font-semibold mb-2">Options</h3>

          {form.options.map((opt, i) => (
            <div key={i} className="border p-4 rounded-xl mb-4 bg-white shadow-sm">

              <input
                placeholder="Option Title"
                value={opt.title}
                onChange={(e) =>
                  handleOptionChange(i, "title", e.target.value)
                }
                className="w-full border p-2 mb-2 rounded"
              />

              <select
                value={opt.type}
                onChange={(e) =>
                  handleOptionChange(i, "type", e.target.value)
                }
                className="w-full border p-2 mb-2 rounded"
              >
                <option value="single">Single</option>
                <option value="multiple">Multiple</option>
              </select>

              {/* ITEMS */}
              {opt.items.map((item, j) => (
                <div key={j} className="grid grid-cols-3 gap-2 mb-2">

                  <input
                    placeholder="Item name"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(i, j, "name", e.target.value)
                    }
                    className="col-span-2 border p-2 rounded w-full"
                  />

                  <input
                    type="number"
                    placeholder="0"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(i, j, "price", e.target.value)
                    }
                    className="border p-2 rounded w-full"
                  />

                </div>
              ))}

              <button
                type="button"
                onClick={() => addItem(i)}
                className="text-blue-500 text-sm"
              >
                + Add Item
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addOption}
            className="text-blue-600 font-medium"
          >
            + Add Option
          </button>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          {isPending ? "Saving..." : "Create Product"}
        </button>

      </form>
    </div>
  );
}