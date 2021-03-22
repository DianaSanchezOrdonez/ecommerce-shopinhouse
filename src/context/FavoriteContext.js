import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [arrayFavorite, setArrayFavorite] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("favorites") !== null) {
      setArrayFavorite(JSON.parse(localStorage.getItem("favorites")));
    }
    return () => { 
      setArrayFavorite(JSON.parse(localStorage.removeItem('favorites')));
    } 
  }, []);

  const addItemFavorite = (item) => {
      console.log('item', item)
    if (isInFavorite(item.item.id) === -1) {
      localStorage.setItem("favorites", JSON.stringify([...arrayFavorite, item]));
      setArrayFavorite([...arrayFavorite, item]);
    } else {
      console.log("entro a este camino: ", item);
      setArrayFavorite([item]);
    }
  };

  const removeItemFavorite = (itemId) => {
    const favoriteRemove = arrayFavorite.filter((product) => product.item.id !== itemId);
    localStorage.setItem("favorites", JSON.stringify(favoriteRemove)); 
    setArrayFavorite(favoriteRemove);
  };

  const isInFavorite = (id) => {
    return arrayFavorite.findIndex((prod) => prod.item.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{
        arrayFavorite,
        setArrayFavorite,
        methodsFavorite: { addItemFavorite, removeItemFavorite, isInFavorite },
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
