import React, { useState } from "react";
import DishItem from "./DishItem";
import "../App.css";
import { FaRandom, FaSearch } from "react-icons/fa";

function Dishes() {
  const [search, setSearch] = useState();
  const [dish, setDish] = useState();
  const [random, setRandom] = useState();
  const [message, setMessage] = useState(
    "Happy to serve you.  Please Search..."
  );

  function DishesData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((responce) => responce.json())
      .then((data) => {
        if (data.meals) {
          setDish(data.meals);
          setMessage(`Showing Results for:${search}`);
        } else {
          setMessage("No match found... Please! Try different Dish");
          setDish();
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
        <h1>Quick Lunch box</h1>
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
              DishesData();
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
              return <DishItem data={item} />;
            })
          : dish
          ? dish.map((item) => {
              return <DishItem data={item} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default Dishes;
