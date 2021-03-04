import { useContext, memo, useState } from "react";
import { useHistory } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

import * as AiIcons from "react-icons/ai";
import "./cartwidget.css";

export const CartWidget = memo(
  () => {
    const CartContextUse = useContext(CartContext);
    const [hide, setHide] = useState(true);
    const history = useHistory();

    /* const showListCart = () => {
      if (hide) {
        setHide(false);
      } else {
        setHide(true);
      }
    }; */

    return (
      <>
        <button
          className={ CartContextUse.cart.length ? "nav-icon" : "hide-list"}
          onClick={() => history.push("/cart")} onMouseEnter={() => setHide(false)}
          onMouseLeave={() => setHide(true)}
        >
          <AiIcons.AiOutlineShoppingCart />
          <span className="span-icon">{CartContextUse.cart.length}</span>
        </button>

        <ul className={hide ? "list-cart hide-list" : "list-cart"}>
          {CartContextUse.cart.map((product) => {
            return (
              <li className="d-flex-row" key={product.item.id}>
                <img src={product.item.image} />
                <span className="widget-description">
                  {product.item.title}
                </span>
                <span>{product.quantity}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  },
  (oldProp, nextProp) => {
    return (
      oldProp.CartContextUse === nextProp.CartContextUse
    );
  }
);
