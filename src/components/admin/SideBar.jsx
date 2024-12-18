import React from 'react';
import mainLogo from '../../assets/images/icon/mainLogo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div
      style={{
        backgroundColor: '#e0f0ff',
        minWidth: '240px',
        padding: '20px',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}>
      <div className="brand d-flex">
        <img
          src={mainLogo}
          alt="logo alt"
          style={{
            width: '40px',
          }}
        />
        <h4 className="fw-bold">KIYAY KOKI</h4>
      </div>

      <ul style={{ listStyle: 'none', padding: '0', marginTop: '30px' }}>
        <span style={{ fontWeight: '200' }}>Pages</span>
        <li>
          <Link
            to="/Admin"
            style={{
              display: 'block',
              padding: '10px',
              color: '#333',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '20px',
            }}>
            <i className="bi bi-house p-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/admin/AdminContact"
            style={{
              display: 'block',
              padding: '10px',
              color: '#333',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '20px',
            }}>
            <i className="bi bi-person-rolodex p-2" />
            Contacts
          </Link>
        </li>
      </ul>

      {/* LOGOUT BUTTON */}
      <Button
        onClick={handleLogout}
        variant="danger"
        style={{
          fontWeight: 'bold',
          padding: '5px',
          fontSize: '12px',
          marginTop: '500px',
        }}>
        <i className="bi bi-box-arrow-left p-2" />
        Logout
      </Button>
    </div>
  );
};

export default SideBar;
