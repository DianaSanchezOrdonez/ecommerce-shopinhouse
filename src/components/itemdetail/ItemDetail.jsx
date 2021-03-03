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
    if (value <= item[0].stock) {
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
    <div className="d-flex-row">
      <main className="main-class">
        <div className="slider-img">
          <img src={item[0].image} />
        </div>
      </main>
      <aside className="aside-class">
        <div className="description">
          <h2>{item[0].title}</h2>
          <p>Stock {item[0].stock}</p>
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
              stock={item[0].stock}
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
