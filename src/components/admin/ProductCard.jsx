import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Card } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { showImage } from '../../api/media';
import formatRupiah from '../../utils/formatRupiah';

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
    // <Link to={`/admin/editProduct/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card className="ProductCard">
      <Card.Img variant="top" src={imageURL} alt="product alt" className="card-img-top" />
      <Card.Body>
        <Card.Title className="card-title">{props.nama}</Card.Title>
        <Card.Text>
          <span className="price-new">{formatRupiah(props.newPrice)}</span>
          <br />
          <span className="price-old">{formatRupiah(props.oldPrice)}</span>
        </Card.Text>
        <div className="rating">
          <div>{renderStars(props.star)}</div>
          <span style={{ color: 'grey', marginLeft: '5px' }}>{props.jumlahUlasan} ulasan</span>
        </div>
      </Card.Body>
    </Card>
    // </Link>
  );
};

export default ProductCard;
