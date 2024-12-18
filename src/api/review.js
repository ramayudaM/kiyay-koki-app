import axiosClient from './axiosClient';

const getReviewByProductId = async (id) => {
  try {
    const response = await axiosClient.get(`/review/product-review/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
};

const createReview = async (rating, comment, productId) => {
  try {
    const response = await axiosClient.post(`/review/`, { rating, comment, productId });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getReviewByUserId = async (id) => {
  try {
    const response = await axiosClient.post(`/review/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export { getReviewByProductId, createReview, getReviewByUserId };
