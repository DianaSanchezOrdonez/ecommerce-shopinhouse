import React from "react";
import { Carousel } from "react-bootstrap";

import "./slider.css";

const Slider = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MPE-Especial-celulares-2021/a7ca5be0-7891-11eb-91ce-371edb0635b0-home-slider_desktop.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mpe-home-desktop-slider-picture-0ee84c1d-2f07-4941-a1c3-883e7aaf9559.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MPE-Especial-Pequenos-Electrodomesticos/8a43ee20-7895-11eb-9bc3-93447826b904-home-slider_desktop.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
