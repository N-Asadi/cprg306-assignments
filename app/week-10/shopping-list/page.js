"use client";

import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ItemList from "./item-list";
import ItemForm from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleItemSelect = (name) => {
    const cleanedName = name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  const handleAddItem = async (newItem) => {
    if (!user) {
      console.error("No user logged in");
      return;
    }

    try {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const loadItems = async () => {
    if (!user) {
      console.warn("No user logged in, cannot load items");
      return;
    }

    try {
      const shoppingList = await getItems(user.uid);
      setItems(shoppingList);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white space-y-6">
        <p className="text-2xl font-bold shadow-lg">
          Oops! Please log in or go back to the main page.
        </p>
        <a
          href="/week-10"
          className="px-6 py-3 text-lg font-semibold bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Go Back
        </a>
      </div>
    );
  }

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
          <MealIdeas ingredient={selectedItemName} />
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
