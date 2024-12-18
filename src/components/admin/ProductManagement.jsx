import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import '../../App.css';

const ProductManagement = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((product, index) => {
            const newPrice = product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price;
            return (
              <Col key={index} className="d-flex justify-content-center">
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
              </Col>
            );
          })}
        </Row>
      ) : (
        <div className="text-center p-4">
          <p className="text-muted">Produk tidak tersedia</p>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
