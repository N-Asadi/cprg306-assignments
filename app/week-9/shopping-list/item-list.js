"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedGroupedItems = Object.keys(groupedItems).reduce(
    (acc, category) => {
      acc[category] = [...groupedItems[category]].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return acc;
    },
    {}
  );

  const sortedCategories = Object.keys(sortedGroupedItems).sort((a, b) =>
    a.localeCompare(b)
  );

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
            sortBy === "name"
              ? "bg-blue-500 text-white shadow-lg hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
            sortBy === "category"
              ? "bg-blue-500 text-white shadow-lg hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory(!groupByCategory)}
          className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
            groupByCategory
              ? "bg-blue-500 text-white shadow-lg hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {groupByCategory ? "Ungroup" : "Group by Category"}
        </button>
      </div>

      {groupByCategory ? (
        sortedCategories.map((category) => (
          <div key={category} className="mb-10 capitalize">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">
              {category}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedGroupedItems[category].map((item) => (
                <Item key={item.id} {...item} onSelect={onItemSelect} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} onSelect={onItemSelect} />
          ))}
        </ul>
      )}
    </div>
  );
}
