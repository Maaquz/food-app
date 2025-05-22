import { useContext, useEffect, useState }  from "react";
import { MealContext } from "../context/MealContext";
import { useParams, useNavigate } from "react-router-dom";

function MealDetail() {
  const { selectedMeal } = useContext(MealContext);
  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => { 
    if (!selectedMeal && id) {
      const fetchMeal = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        }
      };
      fetchMeal();
    }
  }, [id, selectedMeal]);

  if (!meal) return <p className="text-center mt-10">Loading...</p>;
}

export default MealDetail;
