import React from "react";
import './Card.css'
import Product from "./Product/Product";
import { product } from "../../data/Products";

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
                <button>Zobacz więcej</button>
            </div>
        </div>
)

export default Card;