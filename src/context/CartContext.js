import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ defaultValue = [], children }) => {
  const [allProducts, setAllProducts ] = useState([])
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("carrito") !== null) {
      setCart(JSON.parse(localStorage.getItem("carrito")));
    }
    return () => { 
      setCart(JSON.parse(localStorage.removeItem('carrito')));
    } 
  }, []);

  const addItem = (item, quantity) => {
    if (isInCart(item.item.id) === -1) {
      localStorage.setItem("carrito", JSON.stringify([...cart, item]));
      setCart([...cart, item]);
    } else {
      console.log("entro a este camino: ", item.quantity);
      const newCart = [...cart];
      newCart.forEach((product) => {
        if (product.id === item.id) {
          product.quantity += quantity;
        }
      });
      localStorage.setItem("carrito", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const addFavorite = (item) => {
    setFavorite([...favorite, item]);
  }

  const removeItem = (itemId) => {
    const cartRemove = cart.filter((product) => product.item.id !== itemId);
    localStorage.setItem("carrito", JSON.stringify(cartRemove));
    setCart(cartRemove);
  };

  const clear = () => {
    localStorage.removeItem('carrito');
    setCart(defaultValue);
  };

  const isInCart = (id) => {
    return cart.findIndex((prod) => prod.item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        favorite,
        methods: { addItem, removeItem, clear, isInCart, addFavorite },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
