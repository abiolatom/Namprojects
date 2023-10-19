import resList from "../utils/mockData";
import ResCard from "./ResCard";
import React, { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const handleTopRatedRestaurantsClick = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={handleTopRatedRestaurantsClick}
        >
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
