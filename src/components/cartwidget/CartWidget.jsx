import React, { useContext, memo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

import "./cartwidget.css";

export const CartWidget = memo(
  () => {
    const CartContextUse = useContext(CartContext);
    const { dataUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [hide, setHide] = useState(true);
    const history = useHistory();

    useEffect(() => {
      if (dataUser) {
        setUsername(dataUser.username);
      }
    }, [dataUser]);

    return (
      <div className="d-flex-row">
        <span className="span-username">{dataUser ? `Hola, ${username}` : " "}</span>

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
                <img src={product.item.image} alt={product.item.title} />
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
