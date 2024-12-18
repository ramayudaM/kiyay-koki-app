import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { sellerGetShippingAddress } from '../../../api/shippingAddress';

const DetailAlamat = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const { data } = await sellerGetShippingAddress(id);
        setAddresses(data); // Sesuaikan struktur data sesuai respons API
      } catch (err) {
        console.error(err);
        setAddresses([]);
        setError('Gagal memuat daftar alamat. Silakan coba lagi.');
      }
    };

    fetchAddresses();
  }, [id]);

  return (
    <AdminLayout
      content={
        <div className="main-bg">
          <div
            className="text-title"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              fontWeight: 'bold',
            }}>
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}`)} className="link-item" style={{ cursor: 'pointer' }}>
              Wishlist
            </span>
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}/keranjang`)} className="link-item" style={{ cursor: 'pointer' }}>
              Keranjang
            </span>
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}/ulasan`)} className="link-item" style={{ cursor: 'pointer' }}>
              Ulasan
            </span>
            <span onClick={() => navigate(`/admin/AdminContact/detail/${id}/alamat`)} className="link-item" style={{ cursor: 'pointer' }}>
              Daftar Alamat
            </span>
          </div>

          <div
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '50px auto',
              padding: '20px',
            }}>
            {error ? (
              <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
            ) : addresses.length > 0 ? (
              addresses.map((address, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(171, 170, 233, 0.69)',
                    borderRadius: '10px',
                    padding: '20px',
                    marginBottom: '20px',
                  }}>
                  <p>
                    <strong>Nama Penerima:</strong> {address.full_name}
                  </p>
                  <p>
                    <strong>Alamat:</strong> {address.address}
                  </p>
                  <p>
                    <strong>No HP:</strong> {address.phone_number}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>Tidak ada alamat yang tersedia.</p>
            )}
          </div>
        </div>
      }
    />
  );
};

export default DetailAlamat;
