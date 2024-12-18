import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import '../../../detailContact.css'; // File CSS eksternal
import { getWishlistByUserIdAdmin } from '../../../api/wishlist';
import { showImage } from '../../../api/media';
import formatRupiah from '../../../utils/formatRupiah';

const DetailContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);
  const [imageURLs, setImageURLs] = useState({});

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const { data } = await getWishlistByUserIdAdmin(id);
        setWishlist(data);
        await loadProductImages(data);
      } catch (err) {
        console.error(err);
        setWishlist([]);
        setError('Gagal memuat wishlist. Silakan coba lagi.');
      }
    };

    const loadProductImages = async (wishlistItems) => {
      const images = {};
      try {
        for (const item of wishlistItems) {
          const url = await showImage(item.product_image);
          images[item.id] = url;
        }
        setImageURLs(images);
      } catch (err) {
        console.error('Error memuat gambar produk:', err);
      }
    };

    fetchWishlist();
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

          <div className="judul-detail">
            <span>Wishlist Pembeli</span>
          </div>

          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          <div className="wishlist-container">
            {wishlist.length > 0 ? (
              wishlist.map((item) => {
                const newPrice = item.discount > 0 ? item.product_price - (item.product_price * item.discount) / 100 : item.product_price;
                return (
                  <div key={item.id} className="wishlist-item">
                    <img src={imageURLs[item.id] || ''} alt={item.product_name || 'Gambar Produk'} className="product-image" />
                    <div className="deskripsi-product-cart">
                      <h3 className="product-name">{item.product_name}</h3>
                      <div className="price">
                        <h3 className="current-price">{formatRupiah(item.product_price)}</h3>
                        {item.original_price && <h3 className="original-price">{formatRupiah(newPrice)}</h3>}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-wishlist">
                <p>Belum ada produk di wishlist.</p>
              </div>
            )}
          </div>
        </div>
      }
    />
  );
};

export default DetailContact;
