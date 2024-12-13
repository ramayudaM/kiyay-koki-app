import React from "react";
import {Form, InputGroup} from "react-bootstrap"

const LoginForm = () => {
    return (
        <div className="form-login"
        style={{
          padding: "20px",
          borderRadius: "8px",
          width: "350px",
          margin: "0 auto",
        }}
      >
        <Form>
          <Form.Group controlId="formNumber" style={{ position: "relative" }}>
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
          </Form.Group>
        </Form>
      </div>
    )
}

export default LoginForm;