import React from "react";
import './Product.css';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Product = (props) => (
        <div className="product__container">
            <h2>{props.name}</h2>
            <h1>{props.category}</h1>
            <h3>{props.price}zł</h3>
            <Carousel>
                {props.image.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`product-${index}`} />
                    </div>
                ))}
            </Carousel>
            
        </div>
)

export default Product;