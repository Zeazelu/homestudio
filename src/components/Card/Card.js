import React from "react";
import './Card.css'
import Product from "./Product/Product";
import { product } from "../../data/Products";
import { Link } from "react-router-dom";

const Card = () => (
        <div className="card__container">
            <div className="card__products">
                {product.map(item => (
                    <Product 
                        name = {item.name}
                        description = {item.description}
                        price = {item.price}
                        image = {item.image}
                    />
                ))}
                <Link className="card__link" to="/products">
                    <span>Zobacz więcej produktów...</span>
                </Link>
            </div>
        </div>
)

export default Card;