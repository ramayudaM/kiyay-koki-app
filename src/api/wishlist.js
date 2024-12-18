import axiosClient from './axiosClient';

// Fungsi untuk mendapatkan daftar produk
const createWishlist = async (productId) => {
  try {
    const response = await axiosClient.post('/wishlist', { productId });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getWishlistByProduct = async (id) => {
  try {
    const response = await axiosClient.get(`/wishlist/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const deleteWishlist = async (id) => {
  try {
    const response = await axiosClient.delete(`/wishlist/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getWishlistByUserId = async (userId) => {
  try {
    const response = await axiosClient.get(`/wishlist/`, { userId });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};
const getWishlistByUserIdAdmin = async (userId) => {
  try {
    const response = await axiosClient.get(`/wishlist/get-wishlist/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export { createWishlist, getWishlistByProduct, deleteWishlist, getWishlistByUserId, getWishlistByUserIdAdmin };
