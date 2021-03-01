import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemdetail/ItemDetail";
import Loader from "../../components/loader/Loader";

const ItemDetailContainer = () => {
  const { itemID } = useParams();
  const [item, setItem] = useState([0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProducts = fetch("https://fakestoreapi.com/products");

    getProducts
      .then((result) => result.json())
      .then((data) => {
        let filterDetail = data.filter((el) => el.id.toString() === itemID);
        setItem(filterDetail);
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  if(loading){
    return <Loader/>;
  }

  return <ItemDetail item={item} />;
  
};

export default ItemDetailContainer;
