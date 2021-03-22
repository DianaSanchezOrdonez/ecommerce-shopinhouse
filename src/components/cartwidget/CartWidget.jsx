import React, { useContext, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {AiOutlineShoppingCart} from "react-icons/ai";

import Login from "../../components/login/Login";

import "./cartwidget.css";

export const CartWidget = memo(
  () => {
    const CartContextUse = useContext(CartContext);
    const [hide, setHide] = useState(true);
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
      <div className="d-flex-row">
        <button className="btn-login-sidebar" onClick={handleShow}>
          Login
        </button>
        <Login show={show} setShow={setShow}/>
        <button
          className={CartContextUse.cart.length ? "nav-icon" : "hide-list"}
          onClick={() => history.push("/cart")}
          onMouseEnter={() => setHide(false)}
          onMouseLeave={() => setHide(true)}
        >
          <AiOutlineShoppingCart />
          <span className="span-icon">{CartContextUse.cart.length}</span>
        </button>

        <ul className={hide ? "list-cart hide-list" : "list-cart"}>
          {CartContextUse.cart.map((product) => {
            return (
              <li className="d-flex-row" key={product.item.id}>
                <img src={product.item.image} />
                <span className="widget-description">{product.item.title}</span>
                <span>{product.quantity}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
  (oldProp, nextProp) => {
    return oldProp.CartContextUse === nextProp.CartContextUse;
  }
);
