"use client";

import ItemList from "./item-list";
import ItemForm from "./new-item";
import itemsData from "./item.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Grocery List Manager</h1>
      </header>

      <main className="flex-grow p-4">
        <ItemForm onAddItem={handleAddItem} />
        <ItemList items={items} />
      </main>

      <footer className="bg-blue-600 text-white py-2 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Grocery List App
        </p>
      </footer>
    </div>
  );
}
