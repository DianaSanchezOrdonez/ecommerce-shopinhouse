import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import {AiOutlineDelete} from "react-icons/ai";
import {IoBagCheckOutline} from "react-icons/io5";

import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import Login from "../../components/login/Login";
import BuyerForm from "../../components/buyerForm/BuyerForm";

import "./cart.css";

const CartComponent = () => {
  const CartContextUse = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row justify-content-end">
        <Button variant="danger" onClick={() => CartContextUse.methods.clear()}>
          <AiOutlineDelete />
          Empty Cart
        </Button>
        <Button variant="primary" onClick={handleShow}>
          <IoBagCheckOutline/>
          Checkout
        </Button>
      </div>
      {(!currentUser) ? <Login show={show} setShow={setShow}/> : <BuyerForm show={show} setShow={setShow}/>}

      <div className="product-table">
        <div className="product-image">
          <span>Image</span>
          <span>Description</span>
        </div>
        <span>Count</span>
        <span>U. Price</span>
        <span>Total Price</span>
      </div>
      {CartContextUse.cart.map((el) => {
        return (
          <>
            <div className="product-table" key={el.item.id}>
              <div className="product-image">
                <img src={el.item.image} alt="" />
                <span className="title-description">{el.item.title}</span>
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
      })}
    </>
  );
};

export default CartComponent;
