import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { requestOtp } from '../api/user'; // Pastikan ini sudah diimplementasikan

const LoginForm = () => {
  const [form, setForm] = useState({ waNumber: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error

    if (!form.waNumber.trim()) {
      setError('Nomor WA tidak boleh kosong.');
      return;
    }

    try {
      const { data } = await requestOtp(`62${form.waNumber}`);
      navigate('/OtpPage', { state: { data } });
    } catch (error) {
      setError('Gagal mengirim OTP. Silakan coba lagi.');
    }
  };

  return (
    <div
      className="form-login"
      style={{
        padding: '20px',
        borderRadius: '8px',
        width: '350px',
        margin: '0 auto',
      }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPhoneNumber" style={{ position: 'relative' }}>
          <Form.Label style={{ fontWeight: 'bold' }}>Nomor WA</Form.Label>
          <InputGroup>
            <InputGroup.Text
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontWeight: 'bold',
              }}>
              +62
            </InputGroup.Text>
            <Form.Control
              name="waNumber"
              value={form.waNumber}
              onChange={handleChange}
              type="text"
              placeholder="Masukkan nomor WA"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '2px solid #000',
                borderRadius: '0',
                boxShadow: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#000',
              }}>
              <i className="bi bi-lock-fill"></i>
            </div>
          </InputGroup>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </Form.Group>

        <Button
          type="submit"
          style={{
            marginLeft: '80px',
            marginTop: '40px',
            width: '150px',
            borderRadius: '30px',
            background: '#9984f5',
            border: 'none',
          }}>
          Kirim OTP
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
