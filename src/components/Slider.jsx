import React from "react";
import "../App.css";
import carousel from "../assets/images/banner/baner.jpg";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="bigBaner">
      <Carousel style={{ width: "75rem", margin: "auto"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel}
            alt="Baner img"
            text="First slide"
            style={{ height: "350px",borderRadius: "15px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>PROMO MENARIK</h3>
            <p>promo akhir tahun, diskon hingga 50%</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel}
            alt="Baner img"
            text="Second slide"
            style={{ height: "350px",borderRadius: "15px", objectFit: "cover" }}
          />
          <Carousel.Caption>
          <h3>PROMO MENARIK</h3>
          <p>promo akhir tahun, diskon hingga 50%</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel}
            alt="Baner img"
            text="Third slide"
            style={{ height: "350px",borderRadius: "15px", objectFit: "cover" }}
          />
          <Carousel.Caption>
          <h3>PROMO MENARIK</h3>
          <p>promo akhir tahun, diskon hingga 50%</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
