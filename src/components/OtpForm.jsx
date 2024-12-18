import React, { useRef, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { verifyOtp } from '../api/user'; // Fungsi API untuk verifikasi OTP
import { useUserContext } from '../context/UserContext'; // Import UserContext

const OtpForm = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { setTokenAPI } = useUserContext(); // Menggunakan fungsi login dari konteks

  const id = location.state?.data.id || '';
  const waNumber = location.state?.data.waNumber || '';

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Validasi input: hanya angka
    if (!/^\d$/.test(value) && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Jika ada nilai, pindah ke input berikutnya
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Jika semua input terisi, kirim OTP ke API
    if (newOtp.every((digit) => digit !== '')) {
      handleSubmit(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    // Jika pengguna menekan tombol Backspace
    if (e.key === 'Backspace' && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (otpCode) => {
    // const userId = id.toString();
    // const otpCodeStr = otpCode.toString();
    setError(''); // Reset error
    try {
      const { data } = await verifyOtp(id, waNumber, otpCode);
      setTokenAPI(data.token, data.role);

      if (data.role === 'buyer') {
        navigate('/');
      }

      if (data.role === 'seller') {
        navigate('/admin');
      }
    } catch (error) {
      setError('OTP tidak valid. Silakan coba lagi.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Masukkan OTP</h2>
      <p>OTP telah dikirim ke nomor WA Anda.</p>
      <Row className="justify-content-center">
        <Col xs={10} md={6} className="d-flex justify-content-between">
          {Array(6)
            .fill('')
            .map((_, index) => (
              <Form.Control
                key={index}
                type="text"
                maxLength="1"
                className="text-center border border-dark"
                style={{
                  backgroundColor: 'transparent',
                  width: '50px',
                  height: '50px',
                  fontSize: '1.5rem',
                }}
                ref={(el) => (inputRefs.current[index] = el)} // Simpan referensi input
                value={otp[index]} // Tampilkan nilai input
                onChange={(e) => handleInputChange(e, index)} // Pindah ke input berikutnya
                onKeyDown={(e) => handleKeyDown(e, index)} // Tangani tombol Backspace
              />
            ))}
        </Col>
      </Row>
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
      <Button
        variant="primary"
        style={{ marginTop: '20px' }}
        onClick={() => handleSubmit(id, waNumber, otp.join(''))} // Tambahkan tombol submit manual jika diperlukan
        disabled={otp.some((digit) => digit === '')} // Nonaktifkan jika OTP belum lengkap
      >
        Verifikasi OTP
      </Button>
    </div>
  );
};

export default OtpForm;
