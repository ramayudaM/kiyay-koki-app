import React from "react";
import "../App.css";
import ProductCard from "./ProductCard";

const ProductList = ({ product }) => {
  return (
    <div>
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
