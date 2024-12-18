import axiosClient from './axiosClient';

// Fungsi untuk mendapatkan daftar produk
const getShippingAddressByUserId = async () => {
  try {
    const response = await axiosClient.get('/shipping-address');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const createShippingAddress = async ({
  full_name: fullName,
  address,
  phone_number: phoneNumber,
  province,
  city,
  subdistrict,
  postal_code: postalCode,
}) => {
  console.log({ fullName, address, phoneNumber, province, city, subdistrict, postalCode });

  try {
    const response = await axiosClient.post(`/shipping-address/`, { fullName, address, phoneNumber, province, city, subdistrict, postalCode });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const updateShippingAddress = async (
  id,
  { full_name: fullName, address, phone_number: phoneNumber, province, city, subdistrict, postal_code: postalCode }
) => {
  try {
    const response = await axiosClient.put(`/shipping-address/${id}`, { fullName, address, phoneNumber, province, city, subdistrict, postalCode });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const deleteShippingAddress = async (id) => {
  try {
    const response = await axiosClient.delete(`/shipping-address/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const sellerGetShippingAddress = async (id) => {
  try {
    const response = await axiosClient.get(`/shipping-address/seller/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export { getShippingAddressByUserId, createShippingAddress, updateShippingAddress, deleteShippingAddress, sellerGetShippingAddress };
