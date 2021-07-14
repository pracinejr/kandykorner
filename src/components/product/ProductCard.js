import React from "react";
import "./Product.css";

export const ProductCard = ({ product }) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <div className="product__price">Price: {product.price}</div>
    <div className="product__forignKey">
      Product Type: {product.productTypesId}
    </div>
  </section>
);
