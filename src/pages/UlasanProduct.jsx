import React from "react";
import { useParams } from "react-router-dom";
import { product } from "../data/data"; 
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Ulasan = () => {
    const { id } = useParams();
  const selectedProduct = product.find((item) => item.id === parseInt(id));

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) =>
      i < count ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />
    );
  };

  if (!selectedProduct) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="main-bg">
      
      <div className="linking d-flex" style={{marginLeft: "460px", marginTop: "5rem", marginBottom: "-5rem" }}>
              <Link to={`/product/${selectedProduct.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <span style={{ fontWeight: "bold"}}>DETAIL</span>
              </Link>
              <Link to={`/ulasan/${selectedProduct.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <span style={{ fontWeight: "bold", marginLeft: "20px"}}>ULASAN</span>
              </Link>
      </div>
      <div style={{display: "flex"}}>

      <div className="detailImage">
        <img src={selectedProduct.image} alt="product alt" 
        style={{ 
          width: "400px", 
          marginLeft: "40px", 
          marginTop: "5rem", 
          boxShadow: "-10px 10px 3px rgba(0, 0, 0, 0.5)" 
          }} />
          <div className="star" style={{
            width: "",
            marginTop: "15px",
            marginLeft: "40px"
        }}>{renderStars(selectedProduct.star)}
          <span style={{ 
            color: "grey", 
            marginLeft: "2px" }}>({selectedProduct.jumlahUlasan})</span>
        </div>
      </div>


      <div className="deskripsi-box" 
      style={{
        width: "800px",
        minHeight: "600px",
        border: "5px",
        background: "rgba(255, 255, 255, 0.3)",
        marginTop: "5rem",
        marginLeft: "20px"
      }}>
      </div>

      </div>
    </div>
  )
}

export default Ulasan