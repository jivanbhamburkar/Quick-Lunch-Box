import React, { useState } from "react";
import MealItem from "./MealItem";
import "../App.css";
import { FaRandom, FaSearch } from "react-icons/fa";

function Meal() {
  const [search, setSearch] = useState();
  const [meal, setMeal] = useState();
  const [random, setRandom] = useState();
  const [message, setMessage] = useState(
    "Happy to serve you.  Please Search..."
  );

  function mealData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((responce) => responce.json())
      .then((data) => {
        if (data.meals) {
          setMeal(data.meals);
          setMessage(`Showing Results for:${search}`);
        } else {
          setMessage("No match found... Please! Try different Dish");
          setMeal();
        }
      });
  }

  function randomData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) => {
        setRandom(data.meals);
      });
  }

  return (
    <div className="main">
      <div id="title">
        <h1>Meal Finder</h1>
      </div>

      <div id="searchBar">
        <input
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onClick={(e) => setSearch("")}
          placeholder="Search Meal"
          value={search}
        />

        <button
          id="search"
          onClick={() => {
            if (search) {
              setMessage("Loading... Please Wait...");
              mealData();
              setRandom();
            } else {
              setMessage(
                "Please enter something in the input field to get best results"
              );
            }
          }}
        >
          <FaSearch size={14} />
        </button>

        <button
          id="random"
          onClick={() => {
            setMessage(`Lets try this dish today`);
            randomData();
          }}
        >
          <FaRandom size={15} />
        </button>
      </div>

      <div className="container">
        <div style={{ width: "100%" }}>
          <h2>{message}</h2>
        </div>
        {random
          ? random.map((item) => {
              return <MealItem data={item} />;
            })
          : meal
          ? meal.map((item) => {
              return <MealItem data={item} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default Meal;
