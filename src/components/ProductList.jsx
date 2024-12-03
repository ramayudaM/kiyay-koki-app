import React from "react";
import "../App.css";
import ProductCard from "./ProductCard";

const ProductList = ({ product }) => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <div className="promo-tag" style={{ display: "flex" }}>
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
      <div className="cards">
        {product.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              nama={product.nama}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              star={product.star}
              image={product.image}
              jumlahUlasan={product.jumlahUlasan}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
