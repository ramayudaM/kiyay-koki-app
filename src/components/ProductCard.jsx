import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { FaStar,FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const renderStars = (count) => {
    return [...Array(5)].map((_, i) =>
      i < count ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />
    );
  };

  return (
    <Link to={`/product/${props.id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <div className="ProductCard">
      <Card style={{ width: "16rem", background: "none", margin: "auto" }}>
        <Card.Img variant="top" src={props.image} alt="product alt" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "700" }}>{props.nama}</Card.Title>
          <Card.Text>
            <span style={{ fontWeight: "bold", color: "red" }}>
              {props.newPrice}
            </span>
            <br />
            <span style={{ textDecoration: "line-through", color: "gray" }}>
              {props.oldPrice}
            </span>
          </Card.Text>
          <div className="d-flex">
          <div>{renderStars(props.star)}</div>
          <span style={{ color: "grey", marginLeft: "2px", marginTop:"2px" }}>{props.jumlahUlasan}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
    </Link>
  );
};

export default ProductCard;
