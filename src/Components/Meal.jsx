import React, { useState } from "react";
import MealItem from "./MealItem";
import "../App.css";
import { FaRandom } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Meal() {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState();
  const [random, setRandom] = useState();
  // const [showMeal, setShowMeal] = useState([]);

  function mealData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((responce) => responce.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.meals);
        setMeal(data.meals);
        // setSearch();
      });
  }

  function randomData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
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
          placeholder="Search Meal"
          value={search}
        />

        <button
          id="search"
          onClick={() => {
            mealData();
            // setSearch();
            setRandom();
          }}
        >
          <FaSearch size={14} />
        </button>

        <button
          id="random"
          onClick={() => {
            randomData();
          }}
        >
          <FaRandom size={15} />
        </button>
      </div>

      <div className="container">
        {random
          ? random.map((item) => {
              return (
                <MealItem
                  data={item}
                  //  onClick={() => setShowMeal([item])}
                />
              );
            })
          : meal
          ? meal.map((item) => {
              return (
                <MealItem
                  data={item}
                  // onClick={() => setShowMeal([item])}
                />
              );
            })
          : ""}

        <div>
          {/* {showMeal.map((e) => {
          return (
            <>
              <div>
                <h1>{e.data.strMeal}</h1>
                <img src={e.data.strMealThumb} alt="Meal" />
              </div>
            </>
          );
        })} */}
        </div>
      </div>
    </div>
  );
}

export default Meal;
