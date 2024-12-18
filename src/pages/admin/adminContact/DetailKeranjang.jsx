import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { getCartByUserIdAdmin } from '../../../api/cart';
import { showImage } from '../../../api/media';
import formatRupiah from '../../../utils/formatRupiah';

const DetailKeranjang = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [imageURLs, setImageURLs] = useState({});

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await getCartByUserIdAdmin(id);
        setCart(data);
        await loadProductImages(data);
      } catch (err) {
        console.error(err);
        setCart([]);
        setError('Gagal memuat keranjang. Silakan coba lagi.');
      }
    };

    console.log(cart);

    const loadProductImages = async (cartItems) => {
      const images = {};
      try {
        for (const item of cartItems) {
          const url = await showImage(item.product_image);
          images[item.id] = url;
        }
        setImageURLs(images);
      } catch (err) {
        console.error('Error memuat gambar produk:', err);
      }
    };

    fetchCart();
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
            <span>Keranjang Produk</span>
          </div>

          {error ? (
            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
          ) : (
            cart.map((item) => {
              const newPrice = item.discount > 0 ? item.product_price - (item.product_price * item.discount) / 100 : item.product_price;

              return (
                <div className="whitebox" key={item.id} style={{ marginBottom: '20px' }}>
                  <img
                    src={imageURLs[item.id] || ''}
                    alt={item.product_name || 'Product Image'}
                    style={{
                      width: '150px',
                      height: '150px',
                      margin: '20px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                  <div className="deskripsi-product-cart">
                    <h3 style={{ fontWeight: '700', marginLeft: '20px' }}>{item.product_name}</h3>
                    <div className="price d-flex">
                      <h3 style={{ fontWeight: '400', marginLeft: '20px' }}>{formatRupiah(newPrice)}</h3>
                      {item.price && (
                        <h3
                          style={{
                            fontWeight: '200',
                            textDecoration: 'line-through',
                            color: 'gray',
                            marginLeft: '10px',
                          }}>
                          {formatRupiah(item.price)}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      }
    />
  );
};

export default DetailKeranjang;
