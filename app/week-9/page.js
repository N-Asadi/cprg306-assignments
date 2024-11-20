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
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {!user ? (
        <button
          onClick={handleLogin}
          style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          Login with GitHub
        </button>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleLogout}
            style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
          >
            Logout
          </button>
          <br />
          <br />
          <a
            href="/week-9/shopping-list"
            style={{ fontSize: "1rem", color: "blue" }}
          >
            Go to Shopping List
          </a>
        </div>
      )}
    </div>
  );
}
