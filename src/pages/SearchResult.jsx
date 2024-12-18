import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import { getProducts } from '../api/productApi';
import '../App.css';

const SearchResult = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query')?.toLowerCase() || '';

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getProducts(query);
        setFilteredProducts(response?.data || []);
      } catch (error) {
        setError('Failed to fetch products');
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="search-result-container">
      <Slider />
      <div className="container" style={{ padding: '20px' }}>
        <h2 className="text-center my-4">Hasil Pencarian untuk "{query}"</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-danger text-center">{error}</p>
        ) : filteredProducts.length > 0 ? (
          // Pastikan props sesuai dengan yang dibutuhkan ProductList
          <ProductList products={filteredProducts} />
        ) : (
          <div className="text-center">
            <p>Produk yang anda cari tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
