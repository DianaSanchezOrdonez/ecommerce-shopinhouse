import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("carrito") !== null) {
      setCart(JSON.parse(localStorage.getItem("carrito")));
    }
    /* return () => { 
            setCart(JSON.parse(localStorage.removeItem('carrito')));
        } */
  }, []);

  const addItem = (item, quantity) => {
    if (isInCart(item.item[0].id) === -1) {
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

  const removeItem = (itemId) => {
    console.log("cart", cart);
    const cartRemove = cart.filter((product) => product.item[0].id !== itemId);
    localStorage.setItem("carrito", JSON.stringify(cartRemove));
    setCart(cartRemove);
  };

  const clear = () => {
    setCart(defaultValue);
  };

  const isInCart = (id) => {
    return cart.findIndex((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        methods: { addItem, removeItem, clear, isInCart },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
