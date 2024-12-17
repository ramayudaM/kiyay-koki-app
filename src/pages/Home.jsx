import React, { useEffect, useState } from 'react';
import '../App.css';
import Slider from '../components/Slider';
import ProductList from '../components/ProductList';
import { getProducts } from '../api/productApi';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mengambil data produk dari API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log('error', { error });
    return <div>{error}</div>;
  }

  console.log(products);

  return (
    <div className="main-bg">
      <div>
        <Slider />
      </div>
      <div style={{ marginTop: '4rem' }}>
        <div className="promo-tag" style={{ display: 'flex' }}>
          <div className="rectangle" />
          <span
            style={{
              fontWeight: 'bold',
              marginLeft: '20px',
              marginTop: '10px',
            }}>
            Today's
          </span>
        </div>

        <h1 style={{ marginLeft: '20px' }}> PROMO TERBARU </h1>
        <ProductList products={products} />
      </div>

      <div style={{ marginTop: '4rem' }}>
        <div className="promo-tag" style={{ display: 'flex' }}>
          <div className="rectangle" />
          <span
            style={{
              fontWeight: 'bold',
              marginLeft: '20px',
              marginTop: '10px',
            }}>
            Today's
          </span>
        </div>

        <h1 style={{ marginLeft: '20px' }}> Best Seller </h1>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
