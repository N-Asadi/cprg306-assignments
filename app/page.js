"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-500`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50"></div>
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
          <span className="text-2xl font-bold text-primary">CPRG 306</span>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </header>
      <main className="relative z-10 pt-24 pb-16 px-4 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-12">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Web Development 2
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
            WEB DEVELOPMENT 2 ASSIGNMENTS
          </p>
          <ul className="grid gap-6 md:grid-cols-2">
            {[...Array(9)].map((_, index) => (
              <li
                key={index + 2}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <Link href={`week-${index + 2}`} className="block group">
                  <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 transition-all duration-300 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 group-hover:shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                      Week {index + 2} Assignment
                    </h2>

                    <div className="mt-4 flex items-center text-primary">
                      <span className="text-sm font-medium">
                        Start Assignment
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
