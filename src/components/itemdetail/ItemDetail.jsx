import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import "./itemdetail.css";
import ItemCount from "../itemcount/ItemCount";

/**Contexto */
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const [statusButton, setStatusButton] = useState(false);

  const history = useHistory();

  const { methods, cart, setCart } = useContext(CartContext);

  const handleInput = (name, value) => {
    if (value <= 10) {
      setCount(value);
    } else {
      console.log("no se puede!");
    }
  };

  const onAdd = (count) => {
    setStatusButton(true);
    methods.addItem({ item: item, quantity: count }, count);
  };

  return (
    <div className="container">
      <main className="main-class">
        <div className="slider-img">
          <img src={item[0].image} />
        </div>
      </main>
      <aside className="aside-class">
        <div className="description">
          <h2>{item[0].title}</h2>
          <p>Stock 10</p>
          <hr />
          <p>{item[0].description}</p>
          <div className="count-price">
            <label>Precio: </label>
            <span>S/.{item[0].price * count}</span>
          </div>
          {statusButton ? (
            <button
              className="btn-add-cart"
              onClick={() => history.push("/cart")}
            >
              Terminar Compra
            </button>
          ) : (
            <ItemCount
              stock={10}
              initial={1}
              setCount={setCount}
              count={count}
              handleInput={handleInput}
              onAdd={onAdd}
            />
          )}
        </div>
      </aside>
    </div>
  );
};

export default ItemDetail;
