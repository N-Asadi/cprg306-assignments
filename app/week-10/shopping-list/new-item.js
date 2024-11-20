"use client";

import { useState } from "react";

export default function ItemForm({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^a-zA-Z\s]/g, "");
    setName(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = Math.floor(Math.random() * 1000000);
    let newItem = { id: newId, quantity, name, category };

    onAddItem(newItem);

    setQuantity(1);
    setName("");
    setCategory("Produce");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Add New Item
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Item Name"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(event) => handleNameChange(event)}
            required
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Quantity
          </h3>
          <p className="text-4xl font-bold text-blue-600 mb-4 text-center">
            {quantity}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`px-6 py-2 text-white text-lg font-medium rounded-full shadow-md transition transform focus:outline-none focus:ring-4 
              ${
                quantity === 20
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 hover:scale-105 focus:ring-blue-300"
              }`}
            >
              +
            </button>
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`px-6 py-2 text-white text-lg font-medium rounded-full shadow-md transition transform focus:outline-none focus:ring-4 
              ${
                quantity === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 hover:scale-105 focus:ring-red-300"
              }`}
            >
              -
            </button>
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition transform hover:scale-105"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
