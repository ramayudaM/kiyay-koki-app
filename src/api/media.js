import axiosClient from './axiosClient';

// Fungsi untuk mendapatkan gambar dari API
const showImage = async (imageName) => {
  try {
    const response = await axiosClient.get(`/assets/image/${imageName}`, {
      responseType: 'blob',
    });
    const imageURL = URL.createObjectURL(response.data);
    return imageURL;
  } catch (error) {
    console.error('Failed to fetch image:', error);
    throw error;
  }
};

export { showImage };
