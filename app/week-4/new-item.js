"use client";

import { useState } from "react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Quantity</h1>

        <p className="text-4xl font-bold text-blue-600 mb-6">{quantity}</p>

        <div className="flex space-x-4">
          <button
            onClick={increment}
            disabled={quantity === 20}
            className={`px-6 py-3 text-white text-lg font-medium rounded-lg shadow-md transform focus:outline-none focus:ring-4 
    ${
      quantity === 20
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600 hover:scale-105 focus:ring-blue-300"
    }`}
          >
            Increment
          </button>

          <button
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-6 py-3 text-white text-lg font-medium rounded-lg shadow-md transform focus:outline-none focus:ring-4 
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
    </div>
  );
}
