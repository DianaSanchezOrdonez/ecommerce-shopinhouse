import { useContext, memo, useState } from "react";
import { CartContext } from "../../context/CartContext";

import * as AiIcons from "react-icons/ai";
import "./cartwidget.css";

export const CartWidget = memo(
  () => {
    const CartContextUse = useContext(CartContext);
    const [hide, setHide] = useState(true);

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
          className="nav-icon"
          /* onClick={showListCart} */ onMouseEnter={() => setHide(false)}
          onMouseLeave={() => setHide(true)}
        >
          <AiIcons.AiOutlineShoppingCart />
          <span className="span-icon">{CartContextUse.cart.length}</span>
        </button>

        <ul className={hide ? "list-cart hide" : "list-cart"}>
          {CartContextUse.cart.map((product) => {
            return (
              <li className="d-flex-row" key={product.item[0].id}>
                <img src={product.item[0].image} />
                <span className="widget-description">
                  {product.item[0].title}
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
      oldProp.CartContextUse.cart.length === nextProp.CartContextUse.cart.length
    );
  }
);
