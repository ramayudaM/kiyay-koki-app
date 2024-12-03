import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigasi from "./components/Navigasi";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import DetailProduct from "./pages/DetailProduct";
import Ulasan from "./pages/UlasanProduct";

function App() {
  return (
    <Router>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/ulasan/:id" element={<Ulasan />} />
      </Routes>
    </Router>
  );
}

export default App;
