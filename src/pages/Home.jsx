import React, { useEffect, useState } from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import Slider from '../components/Slider';
import ProductList from '../components/ProductList';
import { getProducts } from '../api/productApi';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (error) return <div>{error}</div>;

  return (
    <div className="home-container">
      {/* Slider / Carousel */}
      <Slider />

      {/* Bagian Promo Terbaru */}
      <section className="promo-terbaru">
        <h2 className="section-title">Promo Terbaru</h2>
        <ProductList products={products} />
      </section>
    </div>
  );
};

export default Home;
