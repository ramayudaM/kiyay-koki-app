import React from 'react';
import baner1 from '../assets/images/banner/baner.jpg';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="main-bg">
      <div className="login-img d-flex">
        <img
          src={baner1}
          alt="login alt"
          style={{
            width: '600px',
            borderRadius: '20px',
            marginLeft: '90px',
            marginTop: '80px',
          }}
        />

        <div>
          <h1
            style={{
              fontWeight: '700',
              marginTop: '80px',
              marginLeft: '12rem',
            }}>
            LOGIN/SIGN UP
          </h1>

          <div style={{ marginLeft: '160px', marginTop: '60px' }}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
