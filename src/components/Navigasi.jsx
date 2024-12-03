import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/icon/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

const Navigasi = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="Light"
        style={{ background: "linear-gradient(to right, #dee1fc, #a4aeff)" }}
        className="border"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: "700" }}>
            <img
              src={logo}
              alt="Logo img"
              width="40"
              height="40"
              className="mb-2 p-1"
            />
            KIYAY KOKI
          </Navbar.Brand>
          <Nav className="navLink">
            <Nav.Link className="navStyle" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="navStyle" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="navStyle" as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link  className="navStyle" as={Link} to="/Login">
              Sign Up
            </Nav.Link>
          </Nav>
          <Form
            inline
            className="searching"
            style={{ marginLeft: "7rem", marginRight: "20px" }}
          >
            <Row className="g-0 align-items-center">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="searchBar"
                  style={{ padding: "5px" }}
                />
              </Col>
              <Col xs="auto">
                <Button
                  className="searchButton"
                  type="submit"
                  variant="light"
                  style={{
                    background: "none",
                    border: "none",
                    marginRight: "",
                  }}
                >
                  <i className="bi bi-search"></i>
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="navIcon" style={{ display: "flex", gap: "20px" }}>
            <Nav.Link as={Link} to="/Wishlist">
              <i className="bi bi-box2-heart-fill"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/Cart">
              <i className="bi bi-cart"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/Profile">
              <i className="bi bi-person-fill"></i>
              Profile
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigasi;
