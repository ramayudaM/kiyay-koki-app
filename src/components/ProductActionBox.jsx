import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ProductActionBox = ({ onAddToCart, onAddToWishlist, stock }) => {
    const [jumlahProduct, setJumlahProduct] = useState(1);
    const incerment = () => {
      setJumlahProduct(jumlahProduct + 1);
    };
  
    const decrement = () => { 
        if (jumlahProduct > 1) {
        setJumlahProduct(jumlahProduct - 1);
        }
    };

  return (
    <div className="box" style={{  
        width: "300px", 
        height:"200px", 
        marginTop: "5rem",
        marginLeft: "20px",
        borderRadius: "8px", 
        backgroundColor: "#fff" }}>
      <p style={{
        fontWeight: "Bold",
        textAlign: "center",
        marginTop: "20px"
      }}>Quantity</p>
      <div className="card-keranjang jumlah-product">            
        <button className="button" onClick={decrement}>
        -
        </button>
        <div>{jumlahProduct}</div>
        <button className="button" onClick={incerment}>
        +
        </button> 

      </div>
        <div>
            <Button variant="light" style={{ 
                background: "none  ", 
                border: "2px solid rgb(188, 184, 184)",
                marginLeft: "8px",
                marginTop: "47px" }}>
            <i className="bi bi-heart"></i>
            </Button>   
            <Button variant="light" style={{ 
                background: "none  ", 
                border: "2px solid rgb(188, 184, 184)",
                marginLeft: "197px",
                marginTop: "47px" }}>
            <i className="bi bi-cart"></i>
            </Button>   
        </div>    
    </div>
    
  );
};

export default ProductActionBox;
