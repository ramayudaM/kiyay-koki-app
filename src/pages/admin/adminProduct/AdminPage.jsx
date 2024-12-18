import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductManagement from '../../../components/admin/ProductManagement';
import AdminLayout from '../layout/AdminLayout';
import { getAllProductsByFilter } from '../../../api/productApi';

const AdminPage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter state
  const [category, setCategory] = useState('');
  const [includeDeleted, setIncludeDeleted] = useState(false);

  // Fetch products with filters
  useEffect(() => {
    const fetchProducts = async () => {
      setError(null);

      try {
        setLoading(true);
        const { data } = await getAllProductsByFilter({ category, includeDeleted });
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, includeDeleted]);

  return (
    <AdminLayout
      content={
        <div className="main-bg container-fluid" style={{ padding: '20px' }}>
          {/* Header Controls */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-2">
            <Button variant="primary" className="fw-bold px-4 py-2" onClick={() => navigate('/admin/addProduct/')}>
              + Tambah Produk
            </Button>

            {/* Filter Controls */}
            <div className="d-flex flex-wrap gap-2">
              {/* Include Deleted Filter */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary">Status</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setIncludeDeleted(false)}>Terdaftar</Dropdown.Item>
                  <Dropdown.Item onClick={() => setIncludeDeleted(true)}>Tidak Terdaftar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Category Filter */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary">Kategori</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setCategory('')}>Semua</Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory('fish')}>Ikan</Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory('fish_food')}>Pakan</Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory('aquarium')}>Aquarium</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {/* Product List */}
          <h5 className="fw-bold mb-3 text-dark">Produk</h5>

          {loading ? (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          ) : products.length > 0 ? (
            <ProductManagement products={products} />
          ) : (
            <Alert variant="warning" className="text-center">
              Tidak ada produk yang ditemukan berdasarkan filter ini.
            </Alert>
          )}
        </div>
      }
    />
  );
};

export default AdminPage;
