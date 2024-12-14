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
      <div style={{ marginTop: "4rem" }}>

        <div className="promo-tag" style={{ display: "flex",}}>
          <div className="rectangle" />
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "20px",
              marginTop: "10px",
            }}
            >
            Today's
          </span>
      </div>

        <h1 style={{ marginLeft: "20px" }}> PROMO TERBARU </h1>
        <ProductList product={product} />
    </div>

      <div style={{ marginTop: "4rem" }}>

        <div className="promo-tag" style={{ display: "flex",}}>
          <div className="rectangle" />
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "20px",
              marginTop: "10px",
            }}
            >
            Today's
          </span>
      </div>

        <h1 style={{ marginLeft: "20px" }}> Best Seller </h1>
        <ProductList product={product} />
    </div>
      </div>
  );
};

export default Home;
