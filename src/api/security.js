import axiosClient from './axiosClient';

// const setToken = (token) => {
//   if (token) {
//     axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axiosClient.defaults.headers.common['Authorization'];
//   }
// };
const setToken = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmVfbnVtYmVyIjoiNjI4MjM3NzM4NTQyMiIsImxldmVsIjoic2VsbGVyIiwiY3JlYXRlZF9hdCI6IjIwMjQtMTItMTJUMTM6NDE6MTguMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDI0LTEyLTEyVDEzOjQxOjE4LjAwMFoiLCJkZWxldGVkX2F0IjpudWxsLCJpYXQiOjE3MzQ0Mjc2NjMsImV4cCI6MTczNTAzMjQ2M30.HbgMk8sm_YYwT-JMlCc6iiB_mIyv7kS36UFwuNrVUGM';

  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosClient.defaults.headers.common['Authorization'];
  }
};

// const setApiKey = (apiKey) => {
//   if (apiKey) {
//     axiosClient.defaults.headers.common['x-api-key'] = apiKey;
//   } else {
//     delete axiosClient.defaults.headers.common['x-api-key'];
//   }
// };
const setApiKey = () => {
  const apiKey = 'JHdfksK123LKkjasdfjksl12klsdk2jlfsfjksLksdlfjs';

  if (apiKey) {
    axiosClient.defaults.headers.common['x-api-key'] = apiKey;
  } else {
    delete axiosClient.defaults.headers.common['x-api-key'];
  }
};

export { setApiKey, setToken };
