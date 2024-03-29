import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

import "./itemdetail.css";
import ItemCount from "../itemcount/ItemCount";
import Opinions from "../opinions/Opinions";

/**Contexto */
import { CartContext } from "../../context/CartContext";
import {FavoriteContext} from "../../context/FavoriteContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const [statusButton, setStatusButton] = useState(false);
  const [show, setShow] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  const history = useHistory();

  const { methods } = useContext(CartContext);
  const { methodsFavorite } = useContext(FavoriteContext);

  const handleInput = (name, value) => {
    if (value <= item.stock) {
      setCount(value);
    } else {
      setShow(true);
    }
  };

  const onAdd = (count) => {
    setStatusButton(true);
    methods.addItem({ item: item, quantity: count }, count);
  };

  const onAddFavorite = () => {
    methodsFavorite.addItemFavorite({ item: item });
    setShowFavorite(true)
  };

  return item.categoryId ? (
    <>
    <div className="d-flex-row">
      {
        show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Take care!</Alert.Heading>
                <p>
                  The quantity of items cannot exceed the stock. <br/> 
                  Change this and that and try again.
                </p>
              </Alert>
              : ""
      }
      {
        showFavorite ? <Alert onClose={() => setShowFavorite(false)} variant="success" dismissible>
                Added to{' '}
                <Alert.Link href="/favorite">Favorites</Alert.Link>. Give it a click if you
                like.
               </Alert>
              : ""
      }
      <main className="main-class">
        <div className="slider-img">
          <img src={item.image} alt={item.description} />
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
    {/* <Opinions/> */}
    </>
  ) : (
    <h1>Not Found</h1>
  );
};

export default ItemDetail;
