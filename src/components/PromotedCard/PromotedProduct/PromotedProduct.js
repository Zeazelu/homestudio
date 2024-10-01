import React from "react";
import "./PromotedProduct.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PromotedProduct = (props) => (
  <div className="promotedproduct__container">
    <h2>{props.name}</h2>
    <h3>{props.price}zł</h3>
    <Carousel>
      <div>
        <img src={props.image[0]} alt="promotedproduct" />
      </div>
      <div>
        <img src={props.image[1]} alt="promotedproduct" />
      </div>
      <div>
        <img src={props.image[2]} alt="promotedproduct" />
      </div>
    </Carousel>
  </div>
);

export default PromotedProduct;
