import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <div className="baner1">
        <Card
          style={{
            width: "18rem",
            marginTop: "40px",
            marginLeft: "5rem",
          }}
        >
          <Card.Body className="cardBody">
            
            <Card.Title>GOOD</Card.Title>
            <Card.Title>QUALITY</Card.Title>
          </Card.Body>
        </Card>

        {/* baner2 */}
        <Card
          style={{
            width: "18rem",
            marginTop: "50px",
            marginLeft: "5rem",
          }}
        >
          <Card.Body className="cardBody">
            <Card.Title>BIG</Card.Title>
            <Card.Title>HEALTHY</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Banner;
