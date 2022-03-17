import React, { useState } from "react";
import "../App.css";
import { FaYoutube } from "react-icons/fa";

function MealItem(props) {
  const [showMeal, setShowMeal] = useState([]);
  const [visible, setVisible] = useState(false);

  return (
    <div className="cardCont">
      <div>
        <h1>{props.data.strMeal}</h1>
        <div>
          <a href="https://www.youtube.com/watch?v=N1aJ3nEYXyg">
            <FaYoutube size={35} />
          </a>
        </div>
      </div>
      <div
        className="card"
        onClick={(e) => {
          setShowMeal([props]);
          setVisible(!visible);
        }}
      >
        <img src={props.data.strMealThumb} alt="Meal" />
        <div className="mealName">
          <h2>{props.data.strMeal}</h2>
        </div>

        {visible
          ? showMeal.map((e) => {
              return (
                <>
                  <div style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <div id="mealHead">
                      <h1>{e.data.strMeal}</h1>
                      <h2>{e.data.strCategory}</h2>
                      <h2>{e.data.strArea}</h2>
                    </div>
                    <h2> Recipe </h2> {e.data.strInstructions}
                    <h2>Ingredients</h2>
                    <span className="ingredients">
                      {e.data.strIngredient1}-{e.data.strMeasure1}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient2}-{e.data.strMeasure2}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient3}-{e.data.strMeasure3}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient4} - {e.data.strMeasure4}
                    </span>
                    <br />
                    <span className="ingredients">
                      {e.data.strIngredient5}-{e.data.strMeasure5}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient6}-{e.data.strMeasure6}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient7}-{e.data.strMeasure7}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient8}-{e.data.strMeasure8}
                    </span>
                    <br />
                    <span className="ingredients">
                      {e.data.strIngredient9}
                      {e.data.strMeasure9}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient10}
                      {e.data.strMeasure10}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient11}
                      {e.data.strMeasure11}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient12}
                      {e.data.strMeasure12}
                    </span>
                    <br />
                    <span className="ingredients">
                      {e.data.strIngredient13}
                      {e.data.strMeasure13}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient14}
                      {e.data.strMeasure14}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient15}
                      {e.data.strMeasure15}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient16}
                      {e.data.strMeasure16}
                    </span>
                    <br />
                    <span className="ingredients">
                      {e.data.strIngredient17}
                      {e.data.strMeasure17}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient18}
                      {e.data.strMeasure18}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient19}
                      {e.data.strMeasure19}
                    </span>
                    <span className="ingredients">
                      {e.data.strIngredient20}
                      {e.data.strMeasure20}
                    </span>
                  </div>
                </>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default MealItem;
