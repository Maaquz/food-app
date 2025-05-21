import { useContext } from "react";
import { MealContext } from "../context/MealContext";

function Search() {
  const { mealName, setMealName, setMeals } = useContext(MealContext);

  const fetchMeals = async () => {
  try {
    console.log("Searching for:", mealName);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`);
    const data = await res.json();
    console.log("API-result:", data);
    setMeals(data.meals || []);
  } catch (error) {
    console.error("Error while retrieving:", error);
    setMeals([]);
  }
};

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form sent. Searchterm.", mealName);
  if (mealName.trim()) {
    fetchMeals();
  } else {
    console.warn("No search term specified.");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 mb-8"
    >
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        placeholder="Search for a ingredient..."
          className="w-[600px] sm:w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
