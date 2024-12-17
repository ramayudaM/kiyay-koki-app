import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProductActionBox from '../components/ProductActionBox';
import { getProductById } from '../api/productApi';
import { showImage } from '../api/media';
import formatRupiah from '../utils/formatRupiah';

const DetailProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product && product.images && product.images[0]?.image_url) {
      const fetchImage = async () => {
        try {
          const url = await showImage(product.images[0].image_url);
          setImageURL(url);
        } catch (err) {
          console.error('Error loading image:', err);
        }
      };

      fetchImage();
    }
  }, [product]);

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (i < count ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />));
  };

  if (loading) {
    return <h2>Loading product details...</h2>;
  }

  if (error || !product) {
    return <h2>{error || 'Product not found'}</h2>;
  }
  // console.log(product.name);

  const newPrice = product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price;

  return (
    <div className="main-bg">
      {/* Link Detail dan Ulasan */}
      <div className="linking d-flex" style={{ marginLeft: '460px', marginTop: '5rem', marginBottom: '-5rem' }}>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ fontWeight: 'bold' }}>DETAIL</span>
        </Link>
        <Link to={`/ulasan/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ fontWeight: 'bold', marginLeft: '20px' }}>ULASAN</span>
        </Link>
      </div>

      {/* Gambar dan Detail Produk */}
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div className="detailImage">
          <img
            src={imageURL || '/default-image.png'}
            alt={product.name}
            style={{
              width: '400px',
              height: '400px',
              objectFit: 'cover',
              marginLeft: '40px',
              marginTop: '5rem',
              boxShadow: '-10px 10px 3px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>

        {/* Box Detail */}
        <div
          className="deskripsi-box"
          style={{
            width: '500px',
            minHeight: '600px',
            background: 'rgba(255, 255, 255, 0.3)',
            marginTop: '5rem',
            marginLeft: '20px',
          }}>
          <div className="deskripsi">
            <h1 style={{ fontWeight: '700', textAlign: 'left', marginLeft: '75px' }}>{product.name}</h1>

            <div className="price d-flex" style={{ marginTop: '20px', marginLeft: '75px' }}>
              <h2 style={{ fontWeight: 'bold' }}>{formatRupiah(newPrice)}</h2>
              <h3 style={{ marginLeft: '50px', fontWeight: '400', textDecoration: 'line-through', color: 'gray' }}>{formatRupiah(product.price)}</h3>
            </div>

            <div className="d-flex" style={{ marginLeft: '75px', marginTop: '20px' }}>
              <div>{renderStars(product.averageRating)}</div>
              <span style={{ color: 'grey', marginLeft: '2px' }}>({product.totalReviews})</span>
            </div>

            <h2 style={{ fontWeight: '500', marginLeft: '20px', marginTop: '2rem' }}>DESKRIPSI</h2>
            <p style={{ whiteSpace: 'pre-line', lineHeight: '1.5', marginLeft: '20px', marginTop: '1rem' }}>{product.description}</p>
          </div>
        </div>

        {/* Action Box */}
        <div>
          <ProductActionBox />
          <div className="chat-button" style={{ marginTop: '20px', marginLeft: '20px' }}>
            <Button style={{ borderRadius: '0px' }}>CHAT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
