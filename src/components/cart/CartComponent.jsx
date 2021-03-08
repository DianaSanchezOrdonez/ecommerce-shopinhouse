import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./cart.css";
import { Button } from 'react-bootstrap';
import * as IconName  from "react-icons/io5";


const CartComponent = () => {
  const CartContextUse = useContext(CartContext);
  
  return (
    <>
      <div className="row justify-content-end">
        <Button variant="danger" onClick={() => CartContextUse.methods.clear()}><IconName.IoTrashBinOutline />Empty Cart</Button> 
      </div>
      <div className="product-table">
        <div className="product-image">
          <span>Image</span>
          <span>Description</span>
        </div>
        <span>Count</span>
        <span>U. Price</span>
        <span>Total Price</span>
      </div>
      { CartContextUse.cart.map((el) => {
        return (
          <>
            <div className="product-table" key={el.item.id}>
              <div className="product-image">
                <img src={el.item.image} alt="" />
                <span className='title-description'>{el.item.title}</span>
              </div>
              <span>{el.quantity}</span>
              <span>$ {el.item.price}</span>
              <span>$ {el.quantity * el.item.price}</span>
              <button
                className="btn-delete"
                onClick={() => {
                  CartContextUse.methods.removeItem(el.item.id);
                }}
              >
                x
              </button>
            </div>
          </>
        );
      }) 
    }
    </>
  );
};

export default CartComponent;
