import React from "react";

export default function SingleProduct(props) {
  let product = props.product;
  return (
    <li className="product" key={product.id}>
      <img src={product.thumbnail} />
      <span className="badge">{product.category}</span>
      <p>
        {product.title} (rating:{product.rating}){" "}
      </p>
      <p>${product.price}</p>
      {/* <p>{product.description}</p> */}
    </li>
  );
}
