import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { product } from "../data/data"; 
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import ProductActionBox from "../components/ProductActionBox";

const DetailProduct = () => {
  const { id } = useParams();
  const selectedProduct = product.find((item) => item.id === parseInt(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      
      {/* LINK: DETAIL DAN ULASAN */}
      <div className="linking d-flex" style={{marginLeft: "460px", marginTop: "5rem", marginBottom: "-5rem" }}>
        <Link to={`/product/${selectedProduct.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <span style={{ fontWeight: "bold"}}>DETAIL</span>
        </Link>
        <Link to={`/ulasan/${selectedProduct.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <span style={{ fontWeight: "bold", marginLeft: "20px"}}>ULASAN</span>
        </Link>
      </div>


    {/* GAMBAR */}
    <div style={{display: "flex", marginTop: "10px"}}>

      <div className="detailImage">
        <img src={selectedProduct.image} alt="product alt" 
        style={{ 
          width: "400px", 
          marginLeft: "40px", 
          marginTop: "5rem", 
          boxShadow: "-10px 10px 3px rgba(0, 0, 0, 0.5)" 
          }} />
      </div>

    {/* BOX DETAIL */}
      <div className="deskripsi-box" 
      style={{
        width: "500px",
        minHeight: "600px",
        border: "5px",
        background: "rgba(255, 255, 255, 0.3)",
        marginTop: "5rem",
        marginLeft: "20px"
      }}>

      {/* ISI DETAIL */}
      <div className="deskripsi">
        <h1 
        style={{ fontWeight: "700", textAlign: "center" }}>
          {selectedProduct.nama}
        </h1>

        <div className="price d-flex" 
        style={{
          marginTop: "20px",
          marginLeft: "75px"
        }}>
        <h2 style={{ fontWeight: "bold" }}>
          {selectedProduct.newPrice}
        </h2>

        <h3 style={{ marginLeft: "50px",fontWeight: "400", textDecoration: "line-through", color: "gray" }}>
          {selectedProduct.oldPrice}
        </h3>
        </div>

        <div className="d-flex" style={{marginLeft: "75px", marginTop: "20px"}}>
          <div>{renderStars(selectedProduct.star)}</div>
          <span style={{ color: "grey", marginLeft: "2px" }}>({selectedProduct.jumlahUlasan})</span>
        </div>
        <h2 style={{fontWeight: "500", marginLeft: "20px", marginTop: "2rem"}}>DESKRIPSI</h2>
        <p 
        style={{ 
          whiteSpace: "pre-line", 
          lineHeight: "1.5", 
          marginLeft: "20px", 
          marginTop: "1rem"
          }}>{selectedProduct.deskripsi}</p>
      </div>

      {/* ACTION BOX */}
      </div>
      <div>
          <ProductActionBox/>
         <div className="chat-button" style={{
           marginTop: "20px",
           marginLeft: "20px"
          }}>
            <Button style={{borderRadius: "0px"}}>CHAT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
