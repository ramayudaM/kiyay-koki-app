import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { createWishlist, getWishlistByProduct, deleteWishlist } from '../api/wishlist';
import { createCart, updateCart, getCartByProduct } from '../api/cart';

const ProductActionBox = ({ productId, stock }) => {
  const { id } = useParams();
  const [jumlahProduct, setJumlahProduct] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState('');
  const [cartId, setCartId] = useState('');
  const [cartQuantity, setCartQuantity] = useState(0);

  const increment = () => {
    if (jumlahProduct < stock) {
      setJumlahProduct(jumlahProduct + 1);
    }
  };

  const decrement = () => {
    if (jumlahProduct > 1) {
      setJumlahProduct(jumlahProduct - 1);
    }
  };

  const checkWishlistStatus = async () => {
    try {
      const { data } = await getWishlistByProduct(productId);

      if (data.id) {
        setWishlistId(data.id);
        setIsInWishlist(true);
      } else {
        setWishlistId('');
        setIsInWishlist(false);
      }
    } catch (error) {
      console.error('Error cek status wishlist:', error);
    }
  };

  const checkCartStatus = async () => {
    try {
      const { data } = await getCartByProduct(id);

      if (data.id) {
        setCartId(data.id);
        setCartQuantity(data.quantity);
      } else {
        setCartId('');
        setCartQuantity(0);
      }
    } catch (error) {
      console.error('Error cek status cart:', error);
    }
  };

  useEffect(() => {
    checkWishlistStatus();
    checkCartStatus();
  }, [productId]);

  const addToWishlist = async (e) => {
    try {
      const { data } = await createWishlist(productId);

      if (data.id) {
        setIsInWishlist(true);
        setWishlistId(data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async () => {
    try {
      const { data } = await deleteWishlist(wishlistId);

      if (data.id) {
        setIsInWishlist(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async () => {
    try {
      if (cartId) {
        const { data } = await updateCart(cartId, jumlahProduct);
        setCartId(data.id);
      } else {
        const { data } = await createCart(productId, jumlahProduct);
        setCartId(data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="box"
      style={{
        width: '300px',
        height: '200px',
        marginTop: '5rem',
        marginLeft: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}>
      <p
        style={{
          fontWeight: 'Bold',
          textAlign: 'center',
          marginTop: '20px',
        }}>
        Quantity
      </p>

      <div className="card-keranjang jumlah-product">
        <button className="button" onClick={decrement}>
          -
        </button>
        <div>{jumlahProduct}</div>
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <Button
          variant="light"
          style={{
            background: 'none',
            border: '2px solid rgb(188, 184, 184)',
            marginLeft: '8px',
            marginTop: '47px',
          }}
          onClick={isInWishlist ? removeFromWishlist : addToWishlist}>
          <i className={`bi ${isInWishlist ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
        </Button>
        <Button
          variant="light"
          style={{
            background: 'none',
            border: '2px solid rgb(188, 184, 184)',
            marginLeft: '197px',
            marginTop: '47px',
          }}
          onClick={addToCart}>
          <i className="bi bi-cart"></i>
        </Button>
      </div>
    </div>
  );
};

export default ProductActionBox;
