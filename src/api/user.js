import axiosClient from './axiosClient';

const requestOtp = async (waNumber) => {
  try {
    const response = await axiosClient.post('/users/request-otp', { waNumber });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const verifyOtp = async (id, waNumber, otpCode) => {
  try {
    const response = await axiosClient.post('/users/verify-otp', { id, waNumber, otpCode });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getAllUser = async () => {
  try {
    const response = await axiosClient.get('/users/get-all');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axiosClient.delete(`/users/delete-user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete User:', error);
    throw error;
  }
};

export { requestOtp, verifyOtp, getAllUser, deleteUser };
