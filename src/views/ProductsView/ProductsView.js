import React from "react";
import { allproducts } from "../../data/AllProducts";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductsView() {
    return (
        <div className="productsview__container">
            <ProductCard products={allproducts} />
        </div>
    )
}
export default ProductsView;