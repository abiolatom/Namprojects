import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://downtownmidland.com/wp-content/uploads/2020/12/A1-900x600.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, totalFee, deliveryTime  } = resData?.info;


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
           cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{totalFee} Euros</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    
  );
};

const resList = [
  {
    info: {
      id: "25620",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Intermediate Ring Road",
      areaName: "Ejipura",
      costForTwo: "\u20B9400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      deliveryTime: 19,

      totalFee: 4200,

      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "17036",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "ykkoaqqefmycmwsjmxcm",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "\u20B9300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.4,
      totalFee: 4500,
      deliveryTime:27
    },
  },
       
  {
    info: {
      id: "41913",
      name: "Chinita Real Mexican Food",
      cloudinaryImageId: "hcldbmf9owc3grvbenhx",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "\u20B9750 for two",
      cuisines: ["Mexican", "Salads", "Desserts", "Beverages"],
      avgRating: 4.4,
      totalFee: 4200,
      deliveryTime:40
    },
  },
  {
    info: {
      id: "158855",
      name: "Candice's Gourmet Sandwiches & Wraps",
      cloudinaryImageId: "hpvifptiufwr5ntqc4x1",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "\u20B9600 for two",
      cuisines: [
        "Continental",
        "American",
        "Salads",
        "Desserts",
        "Beverages",
        "Healthy Food",
      ],
      avgRating: 4.4,
      totalFee: 4200,
      deliveryTime:30
    },
  },
  {
    info: {
      id: "48207",
      name: "Kanti Sweets",
      cloudinaryImageId: "edwvxmied0cj3m23gphk",
      locality: "3rd Block",
      areaName: "Koramangala",
      costForTwo: "\u20B9150 for two",
      cuisines: ["Sweets"],
      avgRating: 4.5,
      veg: true,
      totalFee: 3500,
      deliveryTime:40
      
    },
  }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-card-container">
        {resList.map((restaurant) => (
        <ResCard key={restaurant.info.id} resData={restaurant}/>
      ))}
       
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
