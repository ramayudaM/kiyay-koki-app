import React, { useEffect, useState } from 'react';
import '../App.css';
import { getShippingAddressByUserId, createShippingAddress, updateShippingAddress, deleteShippingAddress } from '../api/shippingAddress';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    full_name: '',
    address: '',
    phone_number: '',
    province: '',
    city: '',
    subdistrict: '',
    postal_code: '',
  });

  useEffect(() => {
    const fetchShippingAddress = async () => {
      try {
        const { data } = await getShippingAddressByUserId();
        setAddresses(data);
      } catch (error) {
        setError('Failed to load shipping address');
      } finally {
        setLoading(false);
      }
    };

    fetchShippingAddress();
  }, []);

  const handleAddAddress = () => {
    // Reset currentAddress saat menambah alamat baru
    setIsEditing(true);
    setCurrentAddress({
      full_name: '',
      address: '',
      phone_number: '',
      province: '',
      city: '',
      subdistrict: '',
      postal_code: '',
    });
  };

  const handleSaveAddress = async () => {
    try {
      const updatedAddress = { ...currentAddress };

      if (updatedAddress.id) {
        // Updating an existing address
        await updateShippingAddress(updatedAddress.id, updatedAddress);
        setAddresses((prevAddresses) => prevAddresses.map((address) => (address.id === updatedAddress.id ? updatedAddress : address)));
      } else {
        // Adding a new address
        const { data } = await createShippingAddress(updatedAddress);
        setAddresses((prevAddresses) => [...prevAddresses, data]); // Use the previous state to add the new address
      }

      setIsEditing(false); // Exit the edit mode
    } catch (error) {
      setError('Failed to update shipping address');
    }
  };

  const handleEditAddress = (address) => {
    setIsEditing(true);
    setCurrentAddress({ ...address }); // Pastikan alamat yang dipilih memiliki id
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await deleteShippingAddress(addressId); // pastikan addressId valid
      setAddresses(addresses.filter((address) => address.id !== addressId));
    } catch (error) {
      setError('Failed to delete shipping address');
    }
  };

  return (
    <div className="main-bg">
      <div className="profile-box">
        <div className="d-flex">
          <div
            className="profile-pic"
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '100px',
              marginLeft: '50px',
              marginTop: '20px',
            }}>
            <i
              className="bi bi-person-fill"
              style={{
                fontSize: '50px',
                marginLeft: '14px',
              }}
            />
          </div>
          <span
            style={{
              marginTop: '48px',
              marginLeft: '10px',
              fontWeight: '700',
            }}>
            0819-3429-8038
          </span>
        </div>

        <div className="text" style={{ marginTop: '25px' }}>
          <span
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginLeft: '50px',
            }}>
            Daftar Alamat
          </span>

          <button
            style={{
              fontSize: '20px',
              fontWeight: '100',
              marginLeft: '820px',
              border: 'none',
            }}
            onClick={handleAddAddress}>
            Tambah Alamat
          </button>
        </div>

        {addresses.map((address) => (
          <div
            key={address.id}
            className="address-box"
            style={{
              background: 'rgba(171, 170, 233, 0.69)',
              borderRadius: '10px',
              width: '1100px',
              minHeight: '200px',
              marginLeft: '50px',
              marginTop: '20px',
            }}>
            <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>Rumah</span>
            <button
              style={{
                borderRadius: '0px',
                background: 'none',
                marginTop: '10px',
                marginLeft: '950px',
              }}
              onClick={() => handleEditAddress(address)}>
              Edit
            </button>
            <button
              style={{
                borderRadius: '0px',
                background: 'none',
                marginTop: '10px',
                marginLeft: '10px',
              }}
              onClick={() => handleDeleteAddress(address.id)}>
              Delete
            </button>

            <p style={{ fontWeight: '800', marginLeft: '10px' }}>{address.full_name}</p>
            <span style={{ fontWeight: '100', marginLeft: '10px' }}>{address.phone_number}</span>
            <p style={{ fontWeight: '100', marginLeft: '10px' }}>{address.address}</p>
          </div>
        ))}

        {isEditing && (
          <div
            className="address-form"
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              marginTop: '20px',
              marginLeft: '50px',
              width: '1100px',
            }}>
            <h3>{currentAddress.id ? 'Edit Alamat' : 'Tambah Alamat'}</h3>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={currentAddress.full_name}
              onChange={(e) => setCurrentAddress({ ...currentAddress, full_name: e.target.value })}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Alamat"
              value={currentAddress.address}
              onChange={(e) => setCurrentAddress({ ...currentAddress, address: e.target.value })}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Nomor Telepon"
              value={currentAddress.phone_number}
              onChange={(e) => setCurrentAddress({ ...currentAddress, phone_number: e.target.value })}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Provinsi"
              value={currentAddress.province}
              onChange={(e) => setCurrentAddress({ ...currentAddress, province: e.target.value })}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Kota"
              value={currentAddress.city}
              onChange={(e) => setCurrentAddress({ ...currentAddress, city: e.target.value })}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Kecamatan"
              value={currentAddress.subdistrict}
              onChange={(e) => setCurrentAddress({ ...currentAddress, subdistrict: e.target.value })}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Kode Pos"
              value={currentAddress.postal_code}
              onChange={(e) => setCurrentAddress({ ...currentAddress, postal_code: e.target.value })}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={handleSaveAddress}>
              {currentAddress.id ? 'Simpan Perubahan' : 'Tambah Alamat'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
