import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import img from "../../assets/logo.svg";
import "./cart.css";

const CartComponent = () => {
  const CartContextUse = useContext(CartContext);
  console.log("CartContextUse.cart", CartContextUse.cart);

  return CartContextUse.cart.map((el) => {
    return (
      <div className="product-table" key={el.item[0].id}>
        <div className="product-image">
          <img src={el.item[0].image} alt="" />
          <span>{el.item[0].title}</span>
        </div>
        <span>{el.quantity}</span>
        <span>$ {el.item[0].price}</span>
        <span>$ {el.quantity * el.item[0].price}</span>
        <button className="btn-delete" onClick={() => { CartContextUse.methods.removeItem(el.item[0].id)}}>x</button>
      </div>
    );
  })}
  

export default CartComponent;
