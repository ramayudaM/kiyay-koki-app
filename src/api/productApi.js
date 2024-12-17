import axiosClient from './axiosClient';

// Fungsi untuk mendapatkan daftar produk
const getProducts = async () => {
  try {
    const response = await axiosClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await axiosClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
};

export { getProducts, getProductById };
