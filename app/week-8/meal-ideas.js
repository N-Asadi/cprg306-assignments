"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState({});
  const [selectedMealId, setSelectedMealId] = useState(null);

  const fetchMealIngredients = async (mealId) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();

    if (data.meals) {
      const meal = data.meals[0];
      const ingredientsList = [];

      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];

        if (ingredient) {
          ingredientsList.push(`${ingredient} - ${measurement}`);
        }
      }

      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        [mealId]: ingredientsList,
      }));
    }
  };

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      setIngredients({});
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    } else {
      setMeals([]);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  const handleMealClick = (mealId) => {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
    } else {
      setSelectedMealId(mealId);
      fetchMealIngredients(mealId);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Meal Ideas</h2>
      {meals.length === 0 ? (
        <p className="text-gray-600">
          No meal ideas available. Select an ingredient to see suggestions.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div
                className="cursor-pointer"
                onClick={() => handleMealClick(meal.idMeal)}
              >
                <div className="relative">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {meal.strMeal}
                  </h3>
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
                    aria-expanded={selectedMealId === meal.idMeal}
                    aria-controls={`ingredients-${meal.idMeal}`}
                  >
                    {selectedMealId === meal.idMeal ? (
                      <>
                        Hide Ingredients
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        Show Ingredients
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
              {selectedMealId === meal.idMeal && ingredients[meal.idMeal] && (
                <div
                  id={`ingredients-${meal.idMeal}`}
                  className="bg-white p-4 border-t border-gray-200 space-y-2"
                >
                  <h4 className="font-semibold text-lg text-gray-800">
                    Ingredients:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {ingredients[meal.idMeal].map((ingredient, index) => (
                      <li key={index} className="text-gray-700">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
