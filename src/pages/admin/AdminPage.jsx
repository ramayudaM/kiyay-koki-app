import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/images/icon/mainLogo1.png";
import { product } from "../../data/data";
import ProductManagement from "../../components/admin/ProductManagement";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          backgroundColor: "#e0f0ff",
          width: "240px",
          padding: "20px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div className="brand d-flex">
          <img
            src={mainLogo}
            alt="logo alt"
            style={{
              width: "40px",
            }}
          />
          <h4 className="fw-bold">KIYAY KOKI</h4>
        </div>

        <ul style={{ listStyle: "none", padding: "0", marginTop: "30px" }}>
          <span style={{ fontWeight: "200" }}>Pages</span>
          <li>
            <Link
              to="/Admin"
              style={{
                display: "block",
                padding: "10px",
                color: "#333",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              <i className="bi bi-house p-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/admin/contacts"
              style={{
                display: "block",
                padding: "10px",
                color: "#333",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              <i className="bi bi-person-rolodex p-2" />
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/admin/config"
              style={{
                display: "block",
                padding: "10px",
                color: "#333",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              <i className="bi bi-gear p-2" />
              Configuration
            </Link>
          </li>
        </ul>

        {/* LOGOUT BUTTON */}
        <Button
          onClick={handleLogout}
          variant="danger"
          style={{
            fontWeight: "bold",
            padding: "5px",
            fontSize: "12px",
            marginTop: "350px",
          }}
        >
          <i className="bi bi-box-arrow-left p-2" />
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="main-bg" style={{ flex: 1, padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="secondary"
            style={{
              border: "none",
              borderRadius: "0px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            + Tambah Produk
          </Button>
          <div className="d-flex">
            <Dropdown style={{ marginRight: "10px" }}>
              <Dropdown.Toggle variant="secondary">Semua v</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Terdaftar</Dropdown.Item>
                <Dropdown.Item>Tidak Terdaftar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">Semua v</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Ikan</Dropdown.Item>
                <Dropdown.Item>Pakan</Dropdown.Item>
                <Dropdown.Item>Aquarium</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <h5 style={{ fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Produk
        </h5>
        <ProductManagement product={product} />
      </div>
    </div>
  );
};

export default AdminPage;
