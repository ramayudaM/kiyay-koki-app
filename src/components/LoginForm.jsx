import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); // State untuk nomor telepon
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek apakah nomor telepon adalah admin atau bukan
    const isAdmin = phoneNumber === "08123456789"; // Misalnya admin menggunakan nomor telepon ini

    // Simpan status login di localStorage
    localStorage.setItem("isAdmin", isAdmin);

    if (isAdmin) {
      navigate("/Admin");
    } else {
      navigate("/"); 
    }
  };

  return (
    <div
      className="form-login"
      style={{
        padding: "20px",
        borderRadius: "8px",
        width: "350px",
        margin: "0 auto",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group
          controlId="formPhoneNumber"
          style={{ position: "relative" }}
        >
          <Form.Label style={{ fontWeight: "bold" }}>Number</Form.Label>
          <InputGroup>
            <InputGroup.Text
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontWeight: "bold",
              }}
            >
              +62
            </InputGroup.Text>
            <Form.Control
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder=""
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderBottom: "2px solid #000",
                borderRadius: "0",
                boxShadow: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#000",
              }}
            >
              <i className="bi bi-lock-fill"></i>
            </div>
          </InputGroup>

          <Button
            type="submit"
            style={{
              marginLeft: "80px",
              marginTop: "100px",
              width: "150px",
              borderRadius: "30px",
              background: "#9984f5",
              border: "none",
            }}
          >
            LOGIN
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginForm;
