import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://downtownmidland.com/wp-content/uploads/2020/12/A1-900x600.jpg" />
            </div>
            <div className="nav-items" >
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

const ResCard = () => {
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0" }}>
            <div className="res-card-img">
                <img className="res-logo" alt="res-logo" src="https://cdn.stocksnap.io/img-thumbs/960w/pizza-wine_IJESKJTYB6.jpg" />
                <h3>Meghan Foods</h3>
                <h4>Pizza, Sumose, Cutle</h4>
                <h4>4.5 stars</h4>
                <h4>10 mins</h4>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-card-container">
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
            </div>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div className ="app">
           <Header/>
           <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

