import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { getReviewByUserId } from '../../../api/review';

const DetailUlasan = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { data } = await getReviewByUserId(id);
        setReviews(data);
      } catch (err) {
        console.error(err);
        setReviews([]);
        setError('Gagal memuat ulasan. Silakan coba lagi.');
      }
    };

    fetchReview();
  }, [id]);

  return (
    <AdminLayout
      content={
        <div className="main-bg">
          <div className="text-title">
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}`)} className="link-item">
              Wishlist
            </span>
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}/keranjang`)} className="link-item">
              Keranjang
            </span>
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}/ulasan`)} className="link-item">
              Ulasan
            </span>
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}/alamat`)} className="link-item">
              Daftar Alamat
            </span>
          </div>

          <div
            className="whitebox"
            style={{
              width: '940px',
              minHeight: '300px',
              border: '5px',
              background: 'rgba(255, 255, 255, 0.3)',
              marginTop: '50px',
              marginLeft: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
            }}>
            {error ? (
              <p style={{ color: 'red' }}>{error}</p>
            ) : reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '10px',
                    padding: '10px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    width: '100%',
                  }}>
                  <p>{review.comment}</p>
                  <p style={{ fontSize: '12px', color: 'gray' }}>Oleh: {review.username || 'Anonim'}</p>
                </div>
              ))
            ) : (
              <p>Tidak ada ulasan tersedia.</p>
            )}
          </div>
        </div>
      }
    />
  );
};

export default DetailUlasan;
