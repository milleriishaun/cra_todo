import React from 'react';

function Product(props){
  return (
    <div className="item">
      <h1>{props.product.name}</h1>
      <p>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      <p>- {props.product.description}</p>
    </div>
  )
}

export default Product;