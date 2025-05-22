import { createContext, useState } from "react";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
    const [mealName, setMealName] = useState("");
    const [meals, setMeals] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    
    return (
        <MealContext.Provider value={{
            mealName,
            setMealName,
            meals,
            setMeals,
            selectedId,
            setSelectedId,
            hasSearched,
            setHasSearched,
        }}>
            {children}
        </MealContext.Provider>
    );
};