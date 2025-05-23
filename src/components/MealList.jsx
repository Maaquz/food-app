import React, { useContext } from "react";
import { MealContext } from "../context/MealContext";
import MealModal from "./MealModal";

function MealList() {
  const { meals, selectedId, setSelectedId, hasSearched } = useContext(MealContext);

  console.log("selectedId in MealList now:", selectedId);

  if (hasSearched && (!meals || meals.length === 0)) {
    return (
      <p className="text-center mt-6 text-black">
        No matches found.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-center cursor-pointer"
            onClick={() => {
              console.log("clicked on:", meal.idMeal);
              setSelectedId(meal.idMeal);
            }}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="mx-auto w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-100"
            />
            <h2 className="text-lg font-semibold" style={{ color: "#FF7B00" }}>
              {meal.strMeal}
            </h2>
          </div>
        ))}
      </div>

      {selectedId && (
        <MealModal
          mealId={selectedId}
          onClose={() => {
            console.log("Modal closed");
            setSelectedId(null);
          }}
        />
      )}
    </>
  );
}

export default MealList;
