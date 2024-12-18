import React, { useState, useEffect } from 'react';
import QuantityCart from '../components/QuantityCart';
import { Button } from 'react-bootstrap';
import { getCartByUserId, updateCart } from '../api/cart';
import formatRupiah from '../utils/formatRupiah';
import { showImage } from '../api/media';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageURLs, setImageURLs] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCartByUserId();
        setCart(response.data);

        // Setelah cart didapatkan, load gambar produk
        await loadProductImages(response.data);
      } catch (err) {
        setError('Gagal memuat data keranjang');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const loadProductImages = async (cartItems) => {
    const images = {};
    try {
      for (const item of cartItems) {
        const url = await showImage(item.product_image); // Ambil URL gambar dari API
        images[item.id] = url; // Simpan URL dengan key ID produk
      }
      setImageURLs(images);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      await updateCart(productId, newQuantity);
      const updatedCart = cart.map((item) => (item.id === productId ? { ...item, amount: newQuantity } : item));
      setCart(updatedCart);
    } catch (err) {
      console.error('Gagal mengupdate jumlah produk:', err);
    }
  };

  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(productId)) {
        return prevSelectedItems.filter((id) => id !== productId);
      } else {
        return [...prevSelectedItems, productId];
      }
    });
  };

  const handleChatButtonClick = () => {
    const selectedProducts = cart.filter((item) => selectedItems.includes(item.id));
    const message = selectedProducts
      .map((item) => {
        const totalPrice = (item.product_price - (item.product_price * item.product_discount) / 100) * item.amount;
        return `${item.product_name} (${item.amount} x ${formatRupiah(item.product_price)}) - Total: ${formatRupiah(totalPrice)}`;
      })
      .join('\n');

    const whatsappUrl = `https://wa.me/6282377385422?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) return <div>Loading keranjang...</div>;
  if (error) return <div>{error}</div>;

  // Menghitung total keseluruhan
  const totalKeranjang = cart.reduce((total, item) => {
    const itemPrice = item.product_price - (item.product_price * item.product_discount) / 100;
    return total + itemPrice * item.amount;
  }, 0);

  return (
    <div className="main-bg">
      <div className="cart-title">KERANJANG BELANJA</div>

      <div className="box-wrapper">
        <div className="cart-box">
          <div className="detailCart-box">
            <span style={{ marginLeft: '50px', fontWeight: '500' }}>Keterangan Produk</span>
            <span style={{ marginLeft: '30rem', fontWeight: '500' }}>Jumlah Produk</span>
            <span style={{ marginLeft: '14rem', fontWeight: '500' }}>Total Harga</span>
          </div>

          {/* Render daftar produk dalam keranjang */}
          {cart.map((item) => {
            const newPrice = item.discount > 0 ? item.product_price - (item.product_price * item.product_discount) / 100 : item.product_price;
            const totalPrice = newPrice * item.amount;

            return (
              <div className="whitebox" key={item.id} style={{ display: 'flex', marginBottom: '20px' }}>
                {/* Checkbox untuk memilih produk */}
                <div style={{ marginRight: '20px', marginTop: '60px' }}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{
                      width: '25px',
                      height: '25px',
                      transform: 'scale(1.5)',
                      marginTop: '40px',
                    }}
                  />
                </div>

                {/* Gambar produk */}
                <img
                  src={imageURLs[item.id] || 'placeholder.jpg'}
                  alt={item.product_name}
                  style={{
                    width: '250px',
                    height: '170px',
                    marginTop: '30px',
                    boxShadow: '-5px 5px 3px rgba(0, 0, 0, 0.5)',
                  }}
                />

                {/* Deskripsi produk */}
                <div className="deskripsi-product-cart">
                  <h3
                    style={{
                      fontWeight: '700',
                      marginTop: '40px',
                      marginLeft: '20px',
                    }}>
                    {item.product_name}
                  </h3>
                  <div className="price d-flex">
                    <h3
                      style={{
                        fontWeight: '400',
                        marginTop: '20px',
                        marginLeft: '20px',
                      }}>
                      {formatRupiah(item.product_price)}
                    </h3>
                  </div>
                </div>

                {/* Komponen untuk update jumlah */}
                <QuantityCart jumlahProduct={item.amount} setJumlahProduct={(newQuantity) => handleUpdateQuantity(item.id, newQuantity)} />

                {/* Total harga per produk */}
                <div className="total-harga">
                  <h3
                    style={{
                      fontWeight: '400',
                      marginTop: '85px',
                      marginLeft: '110px',
                    }}>
                    {formatRupiah(totalPrice)}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Menampilkan total keseluruhan */}
      <div
        className="total-keranjang"
        style={{
          textAlign: 'right',
          marginTop: '30px',
          marginRight: '100px',
        }}>
        <h3>Total Keseluruhan: {formatRupiah(totalKeranjang)}</h3>
      </div>

      {/* Tombol chat */}
      <div
        className="chat-button"
        style={{
          textAlign: 'right',
          marginTop: '50px',
          marginRight: '100px',
          height: '100px',
        }}>
        <Button onClick={handleChatButtonClick}>CHAT</Button>
      </div>
    </div>
  );
};

export default Cart;
