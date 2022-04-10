import React from "react";
// import {CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
const Home = () => {
    const product={
        name:"Blue Tshirt",
        price:"3000",
        images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
        _id:"Priyanka"
    }
    return (
        <>
            <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCT BELOW</h1>
                <a href="#container">
                    <button>
                        Scroll
                    </button>
                </a>
            </div>
            <h2 className="homeHeading">Featured Product</h2>
                <div className="container" id="container">
                <Product product={product}/>
                </div>
        </>
    );
};

export default Home;