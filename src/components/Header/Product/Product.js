import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock, url } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <br />
        <p>
          <small>by :{seller}</small>
        </p>
        <p>Price : ${price}</p>
        <p>Only {stock} left in stock - Order soon</p>
        <button  className='cart-button' onClick={() =>props.handleAddProduct (props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
