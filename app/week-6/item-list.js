"use client";

import Item from "./item";
import itemJson from "./item.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const groupedItems = itemJson.reduce((acc, item) => {
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

  const sortedItems = [...itemJson].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="p-4">
      <div className="mb-6 flex justify-center space-x-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
            sortBy === "name"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
            sortBy === "category"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory(!groupByCategory)}
          className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
            groupByCategory
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {groupByCategory ? "Ungroup" : "Group by Category"}
        </button>
      </div>

      {groupByCategory ? (
        sortedCategories.map((category) => (
          <div key={category} className="mb-7 capitalize">
            <h2 className="text-xl font-bold mb-1 text-blue-700 m">
              {category}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedGroupedItems[category].map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 capitalize">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
