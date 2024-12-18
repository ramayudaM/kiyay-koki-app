import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { showImage } from '../api/media';
import formatRupiah from '../utils/formatRupiah';
import '../App.css';

const ProductCard = (props) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await showImage(props.image);
        setImageURL(url);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    fetchImage();
  }, [props.image]);

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (i < count ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />));
  };

  return (
    <Link to={`/product/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-card">
        <Card>
          <div className="product-image-container">
            <Card.Img variant="top" src={imageURL || '/default-image.png'} alt="product" className="product-card-img" />
          </div>
          <Card.Body>
            <Card.Title className="product-title">{props.nama}</Card.Title>
            <Card.Text>
              <span className="product-price">{formatRupiah(props.newPrice)}</span>
              <br />
              <span className="product-old-price">{formatRupiah(props.oldPrice)}</span>
            </Card.Text>
            <div className="product-rating">
              {renderStars(props.star)}
              <span className="review-count">({props.jumlahUlasan})</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default ProductCard;
