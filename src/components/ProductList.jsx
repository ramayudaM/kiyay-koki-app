import React from 'react';
import '../App.css';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        const newPrice = product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price;

        return (
          <ProductCard
            key={product.id}
            id={product.id}
            nama={product.name}
            newPrice={newPrice}
            oldPrice={product.price}
            star={product.averageRating}
            image={product.images[0].image_url}
            jumlahUlasan={product.totalReviews}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
