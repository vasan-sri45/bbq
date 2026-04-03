"use client";

import { useState, useEffect } from "react";
import { ChefHat } from "lucide-react";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Fake API delay
    setTimeout(() => {
      setCategories(menuCategories);
      setItems(menuItems);
      setLoading(false);
    }, 500);
  }, []);

  const getItemsByCategory = (categoryId) => {
    return items.filter((item) => item.category_id === categoryId);
  };

  if (loading) {
    return (
      <section id="menu" className="py-20 bg-gray-50">
        <div className="text-center">Loading menu...</div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ChefHat className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4 text-black">Our Menu</h2>
          <p className="text-gray-600">
            Delicious BBQ & Grill items
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          const categoryItems = getItemsByCategory(category.id);
          if (!categoryItems.length) return null;

          return (
            <div key={category.id} className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
                {category.name}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-lg shadow"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{item.name}</h4>
                      <span className="text-orange-600 font-bold">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

//////////////////////////////////////////////////////
// ✅ STATIC DATA (REPLACE DATABASE)
//////////////////////////////////////////////////////

const menuCategories = [
  { id: "1", name: "Starters" },
  { id: "2", name: "Main Course" },
  { id: "3", name: "BBQ Specials" },
];

const menuItems = [
  {
    id: "1",
    name: "Chicken Wings",
    description: "Spicy grilled wings",
    price: 250,
    category_id: "1",
  },
  {
    id: "2",
    name: "Paneer Tikka",
    description: "Grilled paneer cubes",
    price: 220,
    category_id: "1",
  },
  {
    id: "3",
    name: "Grilled Chicken",
    description: "Juicy BBQ chicken",
    price: 450,
    category_id: "3",
  },
];