import React from "react";
import './PromotedCard.css'
import PromotedProduct from "./PromotedProduct/PromotedProduct";

const PromotedCard = ({ products }) => (
        <div className="promotedcard__container" id="products">
            <div className="promotedcard__products">
                {products.map(item => (
                    <PromotedProduct 
                        key = {item.id}
                        name = {item.name}
                        description = {item.description}
                        price = {item.price}
                        image = {item.image}
                    />
                ))}
                </div>
        </div>
)

export default PromotedCard;