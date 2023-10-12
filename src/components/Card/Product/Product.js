import React from "react";
import './Product.css';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Product = (props) => (
        <div className="product__container">
            <h2>{props.name}</h2>
            <h1>{props.description}</h1>
            <h3>{props.price}zł</h3>
            <Carousel>
                <div>
                    <img src={props.image[0]} alt="product"/>   
                </div>
                <div>
                    <img src={props.image[1]} alt="product"/>   
                </div>
                <div>
                    <img src={props.image[2]} alt="product"/>   
                </div>
            </Carousel>
            
        </div>
)

export default Product;