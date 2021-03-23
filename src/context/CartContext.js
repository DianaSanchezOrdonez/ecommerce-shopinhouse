import React, { createContext, useState, useEffect } from "react";

import {getFirestore} from "../firebase/index";

export const CartContext = createContext();

const CartContextProvider = ({ defaultValue = [], children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    /*Conexión con la bd*/
    const db = getFirestore();

    /*Guardamos la referencia de la colección que queremos tomar*/
    const productsCollection = db.collection("Products");

    /*Tomamos los datos */
    productsCollection.get().then((value) => {
      /* value.docs.map(product => console.log({...product.data(), id:product.id}))  */
      let productsData = value.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setProducts(productsData)
    });
  }, []);

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

  const finalTotal = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.item.price;
  }, 0);


  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        setCart,
        finalTotal,
        methods: { addItem, removeItem, clear, isInCart },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
