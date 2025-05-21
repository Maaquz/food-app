import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import MealList from "./components/MealList";
import MealDetail from "./components/MealDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen p-4 text-white" style={{ backgroundColor: "#2D4D28" }}>
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600" style={{ color: "#FF7B00" }}>Meal Finder</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search />
                <MealList />
              </>
            }
          />
          <Route path="/meal/:id" element={<MealDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

