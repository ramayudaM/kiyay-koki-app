import React, { useRef } from "react";
import { Row, Col, Form } from "react-bootstrap";

const OtpForm = () => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Jika ada nilai, pindah ke input berikutnya
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Jika pengguna menekan tombol Backspace
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Row className="justify-content-center">
      <Col xs={10} md={6} className="d-flex justify-content-between">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <Form.Control
              key={index}
              type="text"
              maxLength="1"
              className="text-center border border-dark"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "1.5rem",
              }}
              ref={(el) => (inputRefs.current[index] = el)} // Simpan referensi input
              onChange={(e) => handleInputChange(e, index)} // Pindah ke input berikutnya
              onKeyDown={(e) => handleKeyDown(e, index)} // Tangani tombol Backspace
            />
          ))}
      </Col>
    </Row>
  );
};

export default OtpForm;
