"use client";

import { useState } from "react";

export default function ItemForm() {
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
    let item = { quantity, name, category };
    console.log(item);

    alert(`Added Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setQuantity(1);
    setName("");
    setCategory("Produce");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-10">
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Add Your Desired Item
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Item Name"
              id="name"
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(event) => handleNameChange(event)}
              required
            />
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              Quantity
            </h1>

            <p className="text-4xl font-bold text-blue-600 mb-4 text-center">
              {quantity}
            </p>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className={`px-6 py-3 text-white text-lg font-medium rounded-lg shadow-md transition transform focus:outline-none focus:ring-4 
                ${
                  quantity === 20
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 hover:scale-105 focus:ring-blue-300"
                }`}
              >
                Increment
              </button>

              <button
                type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className={`px-6 py-3 text-white text-lg font-medium rounded-lg shadow-md transition transform focus:outline-none focus:ring-4 
                ${
                  quantity === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 hover:scale-105 focus:ring-green-300"
                }`}
              >
                Decrement
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="category"
            >
              Category:
            </label>
            <select
              id="category"
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600 transition duration-200"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
