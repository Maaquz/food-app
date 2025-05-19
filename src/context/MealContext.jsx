import { createContext, useState } from "react";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
    const [mealName, setMealName] = useState("");
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    return (
        <MealContext.Provider value={{
            mealName, setMealName,
            meals, setMeals,
            selectedMeal, setSelectedMeal
        }}>
            {children}
        </MealContext.Provider>
    );
};