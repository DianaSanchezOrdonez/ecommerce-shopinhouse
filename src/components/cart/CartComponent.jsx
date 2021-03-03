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
          <span>Imagen</span>
          <span>Descripción</span>
        </div>
        <span>Cantidad</span>
        <span>Precio U.</span>
        <span>Precio Total</span>
      </div>
      { CartContextUse.cart.map((el) => {
        return (
          <>
            <div className="product-table" key={el.item[0].id}>
              <div className="product-image">
                <img src={el.item[0].image} alt="" />
                <span className='title-description'>{el.item[0].title}</span>
              </div>
              <span>{el.quantity}</span>
              <span>$ {el.item[0].price}</span>
              <span>$ {el.quantity * el.item[0].price}</span>
              <button
                className="btn-delete"
                onClick={() => {
                  CartContextUse.methods.removeItem(el.item[0].id);
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
