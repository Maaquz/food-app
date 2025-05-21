import { useEffect, useState, useRef } from "react";

function MealModal({ mealId, onClose }) {
  const [meal, setMeal] = useState(null);
  const hasLoaded = useRef(false);

  console.log("MealModal öppnas med ID:", mealId);

  useEffect(() => {
    if (!mealId || hasLoaded.current) return;

    hasLoaded.current = true;

    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await res.json();
        console.log("API-respons i modal:", data);
        setMeal(data.meals?.[0]);
      } catch (error) {
        console.error("Fel vid hämtning av måltid:", error);
      }
    };

    fetchMeal();
  }, [mealId]);

  if (!meal) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        Laddar...
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(36, 36, 36, 0.5)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FBB76A",
          color: "white",
          borderRadius: "1rem",
          padding: "1.5rem",
          width: "90%",
          maxWidth: "500px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            fontSize: "24px",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          style={{
            width: "130px",
            height: "130px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid white",
            marginBottom: "1rem",
          }}
        />

        <h2 style={{ color: "#FF7B00", fontSize: "1.5rem", fontWeight: "bold" }}>
          {meal.strMeal}
        </h2>

        <h3 style={{ color: "#FF7B00", margin: "1rem 0 0.5rem" }}>
          Instruktioner
        </h3>

        <p
          style={{
            color: "black",
            fontSize: "0.95rem",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap",
          }}
        >
          {meal.strInstructions}
        </p>

        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Se video på YouTube
          </a>
        )}
      </div>
    </div>
  );
}

export default MealModal;




