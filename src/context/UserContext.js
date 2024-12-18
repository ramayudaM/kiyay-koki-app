import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosClient from '../api/axiosClient'; // Import axiosClient instance

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null); // Menambahkan state untuk menyimpan role

  const setTokenAPI = (token, role) => {
    if (token) {
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_role', role);
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setToken(token);
      setRole(role);
    } else {
      delete axiosClient.defaults.headers.common['Authorization'];
      setRole(null); // Reset role saat token dihapus
    }
  };

  // Fungsi untuk logout
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_role');
    delete axiosClient.defaults.headers.common['Authorization']; // Hapus header Authorization
    setToken(null);
    setRole(null); // Reset role saat logout
  };

  // Cek token saat aplikasi dimuat
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    const role = localStorage.getItem('auth_role');

    if (token && role) {
      // Set token ke axiosClient saat aplikasi dimuat
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setToken(token);
      setRole(role);
    } else {
      logout();
    }
  }, []);

  return <UserContext.Provider value={{ token, role, setTokenAPI, logout }}>{children}</UserContext.Provider>;
};
