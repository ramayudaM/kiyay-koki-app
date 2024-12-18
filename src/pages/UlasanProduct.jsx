import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../data/data';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getReviewByProductId, createReview } from '../api/review';
import { getProductById } from '../api/productApi';
import { showImage } from '../api/media';
import maskPhoneNumber from '../utils/sensorNoWa';

const Ulasan = () => {
  const { id } = useParams();
  console.log(id);

  const [reviews, setReviews] = useState([]);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviewByProductId(id);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [id]);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const handleAddReview = async () => {
    if (newRating < 1 || newRating > 5 || !newComment.trim()) {
      setError('Please provide a valid rating and comment.');
      return;
    }
    try {
      const { data } = await createReview(newRating, newComment, id);

      setNewRating(0);
      setNewComment('');
      const updatedReviews = await getReviewByProductId(id);
      setReviews(updatedReviews);
      setError('');
    } catch (error) {
      setError('Failed to add review. Please try again.');
      console.error('Error adding review:', error);
    }
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (i < count ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />));
  };

  return (
    <div className="main-bg">
      <div className="linking d-flex" style={{ marginLeft: '460px', marginTop: '5rem', marginBottom: '-5rem' }}>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ fontWeight: 'bold' }}>DETAIL</span>
        </Link>
        <Link to={`/ulasan/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ fontWeight: 'bold', marginLeft: '20px' }}>ULASAN</span>
        </Link>
      </div>

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div className="detailImage">
          <img
            src={imageURL} // Ganti dengan URL gambar yang valid
            alt="product alt"
            style={{
              width: '400px',
              marginLeft: '40px',
              marginTop: '5rem',
              boxShadow: '-10px 10px 3px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>

        <div
          className="deskripsi-box"
          style={{
            width: '800px',
            minHeight: '600px',
            border: '5px',
            background: 'rgba(255, 255, 255, 0.3)',
            marginTop: '5rem',
            marginLeft: '20px',
          }}>
          <div style={{ padding: '20px' }}>
            <h3>Ulasan:</h3>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review.id}
                  style={{
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                  }}>
                  <div>
                    {renderStars(review.rating)} <span>({review.rating})</span>
                  </div>
                  <p style={{ margin: '5px 0', fontStyle: 'italic' }}>"{review.comment}"</p>
                  {/* Menampilkan nomor HP yang sudah disensor */}
                  <p style={{ fontSize: '14px', color: '#777' }}>Nomor HP: {maskPhoneNumber(review.phone_number)}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}

            <h4 style={{ marginTop: '40px' }}>Berikan Ulasan</h4>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '16px' }}>Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={newRating}
                onChange={(e) => setNewRating(Number(e.target.value))}
                style={{
                  padding: '5px',
                  marginTop: '5px',
                  marginBottom: '15px',
                  width: '50px',
                  fontSize: '16px',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '16px' }}>Komentar:</label>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Tulis komentar Anda"
                rows="4"
                style={{
                  padding: '10px',
                  width: '100%',
                  fontSize: '14px',
                  marginTop: '5px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  borderColor: '#ccc',
                }}></textarea>
            </div>
            <button
              onClick={handleAddReview}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}>
              Submit Review
            </button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ulasan;
