import React from "react";
import { Button } from "react-bootstrap";
import product1 from "../assets/images/Product/p1.jpg";
import product2 from "../assets/images/Product/p2.jpg";

const Wishlist = () => {
    return (
        <div className="main-bg">
            <div  className="cart-title">
                WISHLIST
            </div> 

            <div className="box-wrapper">
            
                <div className="cart-box">

                    <div className="detailCart-box ">
                        <span style={{ 
                            marginLeft: "50px",
                            fontWeight: "500"
                            }}>Keterangan Produk</span>
                        <span style={{ 
                            marginLeft: "51rem",
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
                        <div className="total-harga">   
                            <h3
                                style={{ 
                                    fontWeight: "400",
                                    marginTop: "85px",
                                    marginLeft: "26rem" }}>
                                Rp180.000
                            </h3>
                            <Button variant="light" style={{ 
                                fontWeight: "700",
                                width: "60px",
                                gap: "8px",
                                background: "rgba(0, 0, 0, 0.2)", 
                                marginLeft: "26rem" ,
                                marginTop: "30px",
                                display: "flex" }}>
                                    +
                                <i className="bi bi-cart"></i>
                            </Button>   
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
                        <div className="total-harga">   
                            <h3
                                style={{ 
                                    fontWeight: "400",
                                    marginTop: "85px",
                                    marginLeft: "26rem" }}>
                                Rp150.000
                            </h3>
                            <Button variant="light" style={{ 
                                fontWeight: "700",
                                width: "60px",
                                gap: "8px",
                                background: "rgba(0, 0, 0, 0.2)", 
                                marginLeft: "26rem" ,
                                marginTop: "30px",
                                display: "flex" }}>
                                    +
                                <i className="bi bi-cart"></i>
                            </Button>   
                        </div>
                    </div>


                   

                </div>
            </div>
        </div>
    )
}

export default Wishlist;