import React from 'react';
import '../App.css';
import carousel from '../assets/images/banner/baner.jpg';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <section className="promo-slider">
      <div className="carousel-container">
        <Carousel interval={3000} indicators={true} controls={true} fade>
          {/* Slide 1 */}
          <Carousel.Item>
            <img className="d-block w-100 slider-img" src={carousel} alt="Baner img" text="Second slide" />
            <Carousel.Caption>
              <h3>Promo Menarik</h3>
              <p>Promo akhir tahun, diskon hingga 50%</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img className="d-block w-100 slider-img" src={carousel} alt="Baner img" text="First slide" />
            <Carousel.Caption>
              <h3>Diskon Spesial</h3>
              <p>Produk ikan berkualitas dengan harga terbaik.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img className="d-block w-100 slider-img" src={carousel} alt="Baner img" text="Third slide" />
            <Carousel.Caption>
              <h3>Penawaran Terbatas</h3>
              <p>Segera miliki ikan hias favorit sebelum kehabisan!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
