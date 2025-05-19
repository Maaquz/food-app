import { useContext, useEffect, useState }  from "react";
import { MealContext } from "../context/MealContext";
import { useParams, useNavigate } from "react-router-dom";


function MealDetail() {

    const { selectedMeal } = useContext(MealContext);
    const { id } = useParams();
    const [meal, setMeal] = useState(selectedMeal);

    useEffect(() => { 
        if (!selectedMeal && id) {
            const fetchMeal = async () => {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await res.json();
                setMeal(data.meals[0]);
            }
            fetchMeal();
        }
    }, [id, selectedMeal]);

    if (!meal) return null; // Om det inte finns någon måltid, returnera null för att inte visa något

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
            <div className="flex flex-col items-center">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-40 h-40 rounded -full object-cover border-4 border-blue-200 mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{Meal.strMeal}</h2>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Instructions:</h3>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{Meal.strInstructions}</p>

            {meal.strYoutube && (
                <a 
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors"
                > 
                    Watch on Youtube 
                </a>
            )}
                    </div>
        </div>
    );
    }

    export default MealDetail;
