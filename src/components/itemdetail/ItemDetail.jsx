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

  const { methods, cart, setCart, favorite } = useContext(CartContext);

  const handleInput = (name, value) => {
    if (value <= item.stock) {
      setCount(value);
    } else {
      console.log("no se puede!");
    }
  };

  const onAdd = (count) => {
    setStatusButton(true);
    methods.addItem({ item: item, quantity: count }, count);
  };

  const onAddFavorite = () => {
    methods.addFavorite({ item: item });
  }

  return (
    <div className="d-flex-row">
      <main className="main-class">
        <div className="slider-img">
          <img src={item.image} />
        </div>
      </main>
      <aside className="aside-class">
        <div className="description">
          <h2>{item.title}</h2>
          <p>Stock {item.stock}</p>
          <hr />
          <p>{item.description}</p>
          <div className="count-price">
            <label>Price: </label>
            <span>$ {item.price * count}</span>
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
              stock={item.stock}
              initial={1}
              setCount={setCount}
              count={count}
              handleInput={handleInput}
              onAdd={onAdd}
              onAddFavorite={onAddFavorite}
            />
          )}
        </div>
      </aside>
    </div>
  );
};

export default ItemDetail;
