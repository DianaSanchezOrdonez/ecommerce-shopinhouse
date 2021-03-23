import React, { useState, useEffect, useContext } from "react";
import "./itemlistcontainer.css";

import ItemList from "../../components/itemlist/ItemList";
import Loader from "../../components/loader/Loader";

import { CartContext } from "../../context/CartContext";

const ItemListContainer = ({ categoryID }) => {
  const [arrayProducts, setArrayProducts] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);
  const { products } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);

    if (!categoryID) {
      setArrayProducts(products);
      setIsLoading(false);
    } else  {
      let productByCategory = products.filter(
        (product) => product.categoryId === categoryID
      );
      setArrayProducts(productByCategory);
      setIsLoading(false);
    }

    return () => {};
  }, [categoryID]);

  if (isLoading) {
    return <Loader />;
  }

  return(
    arrayProducts.map((product) => { return <ItemList product={product} key={product.id} /> })
  )
};

export default ItemListContainer;
