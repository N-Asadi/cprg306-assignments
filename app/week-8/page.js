"use client";

import ItemList from "./item-list";
import ItemForm from "./new-item";
import itemsData from "./item.json";
import { useState } from "react";

import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (name) => {
    const cleanedName = name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Grocery List Manager</h1>
      </header>

      <main className="flex-grow p-4 flex">
        <div className="flex-grow">
          <ItemForm onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-none w-1/3 ml-4">
          {" "}
          <MealIdeas ingredient={selectedItemName} />{" "}
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-2 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Grocery List App
        </p>
      </footer>
    </div>
  );
}
