import { useContext } from "react";
import { MealContext } from "../context/MealContext";

function Search() {
  const { mealName, setMealName, setMeals } = useContext(MealContext);

  const fetchMeals = async () => {
  try {
    console.log("Söker efter:", mealName);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`);
    const data = await res.json();
    console.log("API-resultat:", data);
    setMeals(data.meals || []);
  } catch (error) {
    console.error("Fel vid hämtning:", error);
    setMeals([]);
  }
};

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form skickades. Sökterm:", mealName);
  if (mealName.trim()) {
    fetchMeals();
  } else {
    console.warn("Ingen sökterm angiven.");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 px-4"
    >
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        placeholder="Sök efter en ingrediens..."
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Sök
      </button>
    </form>
  );
}

export default Search;
