import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getWishlistByUserId, deleteWishlist } from '../api/wishlist';
import { showImage } from '../api/media';
import formatRupiah from '../utils/formatRupiah';
import '../Wishlist.css'; // Pastikan mengimpor file CSS di sini

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);
  const [imageURLs, setImageURLs] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getWishlistByUserId();
        setWishlist(data);
        await loadProductImages(data);
      } catch (error) {
        setWishlist([]);
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  const loadProductImages = async (wishlistItems) => {
    const images = {};
    try {
      for (const item of wishlistItems) {
        const url = await showImage(item.product_image);
        images[item.id] = url;
      }
      setImageURLs(images);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };

  const removeFromWishlist = async (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);

    try {
      await deleteWishlist(id);
      const { data } = await getWishlistByUserId();
      setWishlist(data);
      await loadProductImages(data);
    } catch (error) {
      console.error(error);
      setWishlist(updatedWishlist);
    }
  };

  return (
    <div className="main-bg">
      <div className="cart-title">WISHLIST</div>

      <div className="box-wrapper">
        <div className="cart-box">
          {wishlist.length > 0 ? (
            wishlist.map((item) => {
              const newPrice = item.discount > 0 ? item.product_price - (item.product_price * item.discount) / 100 : item.product_price;

              return (
                <div className="whitebox" key={item.id}>
                  <img src={imageURLs[item.id] || 'placeholder.jpg'} alt={item.product_name} />

                  <div className="deskripsi-product-cart">
                    <h3>{item.product_name}</h3>
                    <div className="price d-flex">
                      <h3>{formatRupiah(newPrice)}</h3>
                      {item.discount > 0 && <h3 className="old-price">{formatRupiah(item.product_price)}</h3>}
                    </div>
                  </div>

                  <div className="total-harga">
                    <h3>{formatRupiah(newPrice)}</h3>
                    <Button variant="danger" onClick={() => removeFromWishlist(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '20px' }}>Wishlist is empty. Add some items to your wishlist!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
