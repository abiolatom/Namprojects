import resList from "../utils/mockData";
import ResCard from "./ResCard";
import { useState } from "react";

const Body = () => {
  const [listRes, setListRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listRes.filter(
              (res) => res.data.avgRating > 4
            );
            setListRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listRes.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
