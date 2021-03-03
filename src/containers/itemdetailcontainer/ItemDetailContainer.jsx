import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemdetail/ItemDetail";
import Loader from "../../components/loader/Loader";

import {getFirestore} from '../../firebase/index';

const ItemDetailContainer = () => {
  const { itemID } = useParams();
  const [item, setItem] = useState([0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    const productsCollection = db.collection('Products');
    productsCollection.doc(itemID).get().then((data) => { 
      setItem({...data.data(), id: data.id});
      setLoading(false)
     })

    return () => {  }
  }, [])

  if(loading){
    return <Loader/>;
  }

  return <ItemDetail item={item} />;
  
};

export default ItemDetailContainer;
