import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import CartComponent from "../../components/cart/CartComponent";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const CartContextUse = useContext(CartContext);
  const history = useHistory();

  return CartContextUse.cart.length ? (
    <CartComponent />
  ) : (
    <div className="home d-flex-column">
      <span>No hay items</span>
      <button className="button-primary" onClick={() => history.push("/")}>
        {" "}
        Ir a comprar{" "}
      </button>
    </div>
  );
};

export default Cart;
