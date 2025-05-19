import Search from "./components/Search";
import MealList from "./components/MealList";
import MealDetail from "./components/MealDetail";




function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Meal Finder</h1>
      <Search />
      <MealList />
      <MealDetail />
    </div>
  );
}

export default App;
