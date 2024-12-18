import axiosClient from './axiosClient';

// Fungsi untuk mendapatkan daftar produk
const getProducts = async (query) => {
  try {
    const response = await axiosClient.get('/products', {
      params: { search: query },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getAllProductsByFilter = async ({ category = '', includeDeleted = false } = {}) => {
  console.log(category, includeDeleted);

  try {
    const response = await axiosClient.get('/products/filter-product', {
      params: {
        category,
        includeDeleted,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

// const getProducts = async (query) => {
//   try {
//     // Check if the query is provided and properly format the params
//     const params = query ? { query } : {};

//     // Make the API request
//     const response = await axiosClient.get('/api/products', { params });

//     return response.data;
//   } catch (error) {
//     // Improved error logging with a more specific error message
//     console.error('Failed to fetch products:', error.message || error);

//     // Throw a more informative error message for the caller
//     throw new Error('Failed to fetch products. Please try again later.');
//   }
// };

const getProductById = async (id) => {
  try {
    const response = await axiosClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
};

const createProduct = async (formData) => {
  return await axiosClient.post('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const editProduct = async (query) => {};

export { getProducts, getProductById, getAllProductsByFilter, createProduct, editProduct };
