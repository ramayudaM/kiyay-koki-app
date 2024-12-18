import axiosClient from './axiosClient';

// Fungsi untuk mendapatkan daftar produk
const createCart = async (productId, amount) => {
  try {
    const response = await axiosClient.post('/cart', { productId, amount });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const deleteCart = async (id) => {
  try {
    const response = await axiosClient.delete(`/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const updateCart = async (id, amount) => {
  try {
    const response = await axiosClient.put(`/cart/${id}`, { amount });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getCartByProduct = async (id) => {
  try {
    const response = await axiosClient.get(`/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getCartByUserId = async (userId) => {
  try {
    const response = await axiosClient.get(`/cart/`, { userId });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getCartByUserIdAdmin = async (userId) => {
  try {
    const response = await axiosClient.get(`/cart/get-cart/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export { createCart, deleteCart, updateCart, getCartByProduct, getCartByUserId, getCartByUserIdAdmin };
