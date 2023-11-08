import resList from "../utils/mockData";
import ResCard from "./ResCard";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const handleTopRatedRestaurantsClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async (req, res) => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedRestaurantsClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
