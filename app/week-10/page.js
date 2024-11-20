"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white">
      <div className="bg-white rounded-lg shadow-xl text-center p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome to Grocery List Manager
        </h1>
        {!user ? (
          <div>
            <button
              onClick={handleLogin}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              Login with GitHub
            </button>
            <br />
            <button
              onClick={() => (window.location.href = "/")}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Exit to Main Page
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-700 text-lg font-medium mb-4">
              <span className="font-bold">{user.displayName}</span> (
              {user.email})
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-medium text-lg transition-all duration-300"
            >
              Logout
            </button>
            <br />
            <br />
            <a
              href="/week-10/shopping-list"
              className="text-purple-700 font-bold hover:text-purple-800 text-lg transition-all duration-300"
            >
              Go to Shopping List
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
