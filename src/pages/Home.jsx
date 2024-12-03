import React from "react";
import "../App.css";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import { product } from "../data/data"

const Home = () => {
  return (
    <div className="main-bg">
        <div >
          <Slider />
        </div>
        <ProductList product={product} />
        <ProductList product={product} />
      </div>
  );
};

export default Home;
