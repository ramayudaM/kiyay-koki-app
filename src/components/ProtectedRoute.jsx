import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { token, role } = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false setelah data token dan role telah tersedia
    if (token && role !== null) {
      setLoading(false);
    }
  }, [token, role]);

  // Tampilkan loading sementara data token dan role sedang diambil
  if (loading) {
    return <div>Loading...</div>;
  }

  // Jika tidak ada token (belum login)
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika token ada, tapi role tidak sesuai dengan role yang dibutuhkan
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />; // Redirect ke halaman utama jika role tidak sesuai
  }

  return children; // Jika token ada dan role sesuai, tampilkan children
};

export default ProtectedRoute;
