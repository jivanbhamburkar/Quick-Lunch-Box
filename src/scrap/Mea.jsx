import React, { useState } from "react";
import MealItem from "../Components/MealItem";
import "../App.css";
import { FaRandom, FaSearch } from "react-icons/fa";

function Mea() {
  const [search, setSearch] = useState();
  const [meal, setMeal] = useState();
  const [random, setRandom] = useState();
  const [loading, setLoading] = useState("");
  // const [showMeal, setShowMeal] = useState([]);

  function mealData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((responce) => responce.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.meals);
        if (data.meals) {
          setMeal(data.meals);
        }
        setLoading(false);
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
    setLoading(false);
  }
  // if(!meal){
  //   return <h2>Sorry... Try Another Meal</h2>
  // }
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
              setLoading(true);
              mealData();
              // setSearch("");
              setRandom();
              
            }
          }}
        >
          <FaSearch size={14} />
        </button>

        <button
          id="random"
          onClick={() => {
            setLoading(true);
            randomData();
           
          }}
        >
          <FaRandom size={15} />
        </button>
      </div>

      <div className="container">
        <div style={{ width: "100%" }}>
          {loading  ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Showing Results for : {search}</h2>
          )}
        </div>
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

export default Mea;
