import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemList from '../../components/itemlist/ItemList';

const ItemFavorite = () => {
  const CartContextUse = useContext(CartContext);

  console.log("CartContextUse", CartContextUse);

  return CartContextUse.favorite.map((el) => {
    return <ItemList product={el.item}/>
  });
};

export default ItemFavorite;
