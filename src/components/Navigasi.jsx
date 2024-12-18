import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/icon/mainLogo1.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useUserContext } from '../context/UserContext';

const Navigasi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { token, logout } = useUserContext();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/SearchResult?query=${searchTerm}`);
    }
  };

  const location = useLocation();
  const hideOnRoutes = ['/Admin'];
  if (hideOnRoutes.includes(location.pathname)) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar fixed="top" expand="lg" variant="light" style={{ background: 'linear-gradient(to right, #dee1fc, #a4aeff)' }} className="border">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: '700' }}>
          <img src={mainLogo} alt="Logo img" width="50" height="50" className="p-1" />
          KIYAY KOKI
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          {/* Menu Items */}
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link className="navStyle" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="navStyle" as={Link} to="/contact">
              Contact
            </Nav.Link>
            {!token && (
              <Nav.Link className="navStyle" as={Link} to="/login">
                Sign Up
              </Nav.Link>
            )}
          </Nav>

          {/* Search Bar */}
          <Form onSubmit={handleSearch} className="d-flex align-items-center gap-2">
            <Form.Control type="text" placeholder="Search" className="searchBar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" variant="outline-primary" className="searchButton">
              <i className="bi bi-search"></i>
            </Button>
          </Form>

          {/* Icons */}
          <div className="d-flex gap-3 mt-2 mt-md-0 nav-login" style={{ paddingLeft: '40px' }}>
            {token ? (
              <>
                <Nav.Link as={Link} to="/Wishlist" className="navIcon">
                  <i className="bi bi-box2-heart-fill"></i>
                </Nav.Link>
                <Nav.Link as={Link} to="/Cart" className="navIcon">
                  <i className="bi bi-cart"></i>
                </Nav.Link>
                <Nav.Link as={Link} to="/Profile" className="navIcon">
                  <i className="bi bi-person-fill"></i> Profile
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="navIcon" style={{ cursor: 'pointer' }}>
                  <i className="bi bi-box-arrow-right"></i> Logout
                </Nav.Link>
              </>
            ) : null}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
