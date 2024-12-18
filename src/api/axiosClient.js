import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000', // Ganti dengan URL API Anda
});

// Token Authorization
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmVfbnVtYmVyIjoiNjI4MjM3NzM4NTQyMiIsImxldmVsIjoic2VsbGVyIiwiY3JlYXRlZF9hdCI6IjIwMjQtMTItMTJUMTM6NDE6MTguMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDI0LTEyLTEyVDEzOjQxOjE4LjAwMFoiLCJkZWxldGVkX2F0IjpudWxsLCJpYXQiOjE3MzQ0Mjc2NjMsImV4cCI6MTczNTAzMjQ2M30.HbgMk8sm_YYwT-JMlCc6iiB_mIyv7kS36UFwuNrVUGM';
axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// API Key
const apiKey = 'JHdfksK123LKkjasdfjksl12klsdk2jlfsfjksLksdlfjs';
axiosClient.defaults.headers.common['x-api-key'] = apiKey;

export default axiosClient;
