import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import mainLogo from "../assets/images/icon/logo.png"

const OtpPage = () => {
        const [timer, setTimer] = useState(20); 
        const [isActive, setIsActive] = useState(true); 
      
        useEffect(() => {
          if (!isActive) return; 
      
          const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
          }, 1000);
      
          return () => clearInterval(interval); 
        }, [isActive]); 
      
        const resetTimer = () => {
          setTimer(20); 
          setIsActive(true); 
        };

  return (
    <div className="main-bg">
      <Container
        style={{ height: "100%", marginTop: "50px" }}
      >

        <Row className="w-100">
          <Col xs={1}>
            <Button as={Link} to="/login" variant="light" style={{
                backgroundColor: "transparent",
                border: "2px solid black"
            }}>
              &#8592;
            </Button>

          </Col>
          <Col className="d-flex">
            <img src={mainLogo} alt="main alt"
            style={{ width: "40px", marginLeft: "800px" }} />
            
            <h3 className="fw-bold">KIYAY KOKI</h3>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <h1 className="fw-bold">Enter Code</h1>
            <p>
              Kami telah mengirim SMS dengan kode aktivasi ke no WhatsApp Anda
            </p>
          </Col>
        </Row>

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
                  style={{ backgroundColor: "transparent", width: "50px", height: "50px", fontSize: "1.5rem" }}
                />
              ))}
          </Col>
        </Row>

        {/* Timer */}
        <Row className="text-center mt-3">
          <Col>
            <Button variant="link" onClick={resetTimer} disabled={isActive && timer > 0} className="text-dark">
              Send code again
            </Button>{" "}
            <span className="fw-bold">00:{timer < 10 ? `0${timer}` : timer}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtpPage;
