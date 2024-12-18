import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigasi from './components/Navigasi';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import DetailProduct from './pages/DetailProduct';
import Ulasan from './pages/UlasanProduct';
import OtpPage from './pages/OtpPage';
import SearchResult from './pages/SearchResult';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

import AdminPage from './pages/admin/adminProduct/AdminPage';
import AddProduct from './pages/admin/adminProduct/AddProducts';
import EditProduct from './pages/admin/adminProduct/EditProducts';
import AdminContact from './pages/admin/adminContact/AdminContact';
import DetailContact from './pages/admin/adminContact/DetailContacts';
import DetailKeranjang from './pages/admin/adminContact/DetailKeranjang';
import DetailUlasan from './pages/admin/adminContact/DetailUlasan';
import DetailAlamat from './pages/admin/adminContact/DetailAlamat';

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

function AppRoutes() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Navigasi />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OtpPage" element={<OtpPage />} />
        <Route path="/SearchResult" element={<SearchResult />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Wishlist"
          element={
            <ProtectedRoute requiredRole="buyer">
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cart"
          element={
            <ProtectedRoute requiredRole="buyer">
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute requiredRole="buyer">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/ulasan/:id" element={<Ulasan />} />

        {/* admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="seller">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editProduct/:id"
          element={
            <ProtectedRoute requiredRole="seller">
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/addProduct"
          element={
            <ProtectedRoute requiredRole="seller">
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/AdminContact"
          element={
            <ProtectedRoute requiredRole="seller">
              <AdminContact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/AdminContact/detail/:id"
          element={
            <ProtectedRoute requiredRole="seller">
              <DetailContact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/AdminContact/detail/:id/keranjang"
          element={
            <ProtectedRoute requiredRole="seller">
              <DetailKeranjang />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/AdminContact/detail/:id/ulasan"
          element={
            <ProtectedRoute requiredRole="seller">
              <DetailUlasan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/AdminContact/detail/:id/alamat"
          element={
            <ProtectedRoute requiredRole="seller">
              <DetailAlamat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
