import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import ItemList from "../../components/itemlist/ItemList";
import Loader from "../../components/loader/Loader";

const ItemListContainer = ({ categoryID }) => {
  const [products, setProducts] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    const getProducts = fetch("https://fakestoreapi.com/products");

    if (!categoryID) {
      getProducts
        .then((result) => result.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      getProducts
        .then((result) => result.json())
        .then((data) => {
          let productByCategory = data.filter(
            (product) => product.category.toString() === categoryID
          );
          setProducts(productByCategory);
          setIsLoading(false);
        });
    }

    /* CONSUMO DE API 
        fetch('https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung')
        .then((result) => {return result.json()})
        .then((data) => console.log('data',data))
        .catch((error) => console.log(error)) */
  }, [categoryID]);

  if (isLoading) {
    return <Loader/>;
  }

  return <ItemList products={products} />;
};

export default ItemListContainer;
