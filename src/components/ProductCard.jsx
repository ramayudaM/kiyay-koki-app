import React, { useEffect, useState } from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { showImage } from '../api/media';
import formatRupiah from '../utils/formatRupiah';

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
      <div className="ProductCard">
        <Card style={{ width: '16rem', background: 'none', margin: 'auto' }}>
          <Card.Img variant="top" src={imageURL || '/default-image.png'} alt="product alt" className="product-card-img" />
          <Card.Body>
            <Card.Title style={{ fontWeight: '700' }}>{props.nama}</Card.Title>
            <Card.Text>
              <span style={{ fontWeight: 'bold', color: 'red' }}>{formatRupiah(props.newPrice)}</span>
              <br />
              <span style={{ textDecoration: 'line-through', color: 'gray' }}>{formatRupiah(props.oldPrice)}</span>
            </Card.Text>
            <div className="d-flex">
              <div>{renderStars(props.star)}</div>
              <span style={{ color: 'grey', marginLeft: '2px', marginTop: '2px' }}>{props.jumlahUlasan}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default ProductCard;
