import React from 'react';
import baner1 from '../assets/images/banner/baner.jpg';
import LoginForm from '../components/LoginForm';
import '../App.css'; // Pastikan file CSS sudah tersedia

const Login = () => {
  return (
    <div className="main-bg d-flex justify-content-center align-items-center vh-100">
      <div className="login-container d-flex flex-wrap justify-content-center align-items-center p-4">
        <img src={baner1} alt="login alt" className="login-image" />
        <div className="text-center login-content">
          <h1 className="login-title">LOGIN / SIGN UP</h1>
          <div className="login-form">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
