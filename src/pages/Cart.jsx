import React from "react";
import QuantityCart from "../components/QuantityCart";
import  { Button } from "react-bootstrap"
import product1 from "../assets/images/Product/p1.jpg";
import product2 from "../assets/images/Product/p2.jpg";

const Cart = () => {

    return (
        <div className="main-bg">
            <div  className="cart-title">
                KERANJANG BELANJA
            </div> 

            <div className="box-wrapper">

                <div className="cart-box">

                    <div className="detailCart-box ">
                        <span style={{ 
                            marginLeft: "50px",
                            fontWeight: "500"
                            }}>Keterangan Produk</span>
                        <span style={{ 
                            marginLeft: "30rem",
                            fontWeight: "500"
                            }}>Jumlah Produk</span>
                        <span style={{ 
                            marginLeft: "14rem",
                            fontWeight: "500"
                            }}>Total Harga</span>
                        
                    </div>

                    {/* PRODUCT NYA */}
                    <div className="whitebox">
                        <img src={product1} alt="Fish alt"
                        style={{
                            width: "250px", 
                            height: "170px",
                            marginLeft: "30px", 
                            marginTop: "30px", 
                            boxShadow: "-5px 5px 3px rgba(0, 0, 0, 0.5)" }}>
                            </img>
                            
                            <div className="deskripsi-product-cart">
                            <h3
                            style={{ 
                                fontWeight: "700",
                                marginTop: "40px",
                                marginLeft: "20px" }}>
                            Oranda Sort Tail
                            </h3>
                            
                            <div className="price d-flex">

                            <h3
                            style={{ 
                                fontWeight: "400",
                                marginTop: "20px",
                                marginLeft: "20px" }}>
                            Rp180.000
                            </h3>
                            
                            <h3
                            style={{ 
                                fontWeight: "200",
                                textDecoration: "line-through", 
                                color: "gray",
                                marginTop: "20px",
                                marginLeft: "10px" }}>
                            Rp200.000
                            </h3>
                            </div>
                            </div>
                        
                        <QuantityCart/>

                        <div className="total-harga">   
                            <h3
                                style={{ 
                                    fontWeight: "400",
                                    marginTop: "85px",
                                    marginLeft: "110px" }}>
                                Rp180.000
                            </h3>
                        </div>
                    </div>


                    {/* PRODUCT 2 */}
                    <div className="whitebox">
                        <img src={product2} alt="Fish alt"
                        style={{
                            width: "250px", 
                            height: "170px",
                            marginLeft: "30px", 
                            marginTop: "30px",
                            boxShadow: "-5px 5px 3px rgba(0, 0, 0, 0.5)" }}>
                            </img>
                            
                            <div className="deskripsi-product-cart">
                            <h3
                            style={{ 
                                fontWeight: "700",
                                marginTop: "40px",
                                marginLeft: "20px" }}>
                            Rose Tail Merah
                            </h3>
                            
                            <div className="price d-flex">

                            <h3
                            style={{ 
                                fontWeight: "400",
                                marginTop: "20px",
                                marginLeft: "20px" }}>
                            Rp150.000
                            </h3>
                            
                            <h3
                            style={{ 
                                fontWeight: "200",
                                textDecoration: "line-through", 
                                color: "gray",
                                marginTop: "20px",
                                marginLeft: "10px" }}>
                            Rp200.000
                            </h3>
                            </div>
                            </div>
                            
                        <QuantityCart/>

                        <div className="total-harga">   
                            <h3
                                style={{ 
                                    fontWeight: "400",
                                    marginTop: "85px",
                                    marginLeft: "110px" }}>
                                Rp150.000
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className="chat-button" style={{
                textAlign: "right",
                marginTop: "50px",
                marginRight: "100px",
                height: "100px"
            }}>
            <Button >CHAT</Button>
            </div>
        </div>
    )
}

export default Cart;