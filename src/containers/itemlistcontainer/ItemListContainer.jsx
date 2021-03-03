import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import ItemList from "../../components/itemlist/ItemList";
import Loader from "../../components/loader/Loader";

import { getFirestore } from "../../firebase/index";

const ItemListContainer = ({ categoryID }) => {
  const [products, setProducts] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);

  /* useEffect(() => {
    /* CONSUMO DE API 
        fetch('https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung')
        .then((result) => {return result.json()})
        .then((data) => console.log('data',data))
        .catch((error) => console.log(error)) 
  }, [categoryID]); */

  useEffect(() => {
    setIsLoading(true);
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
      if (!categoryID) {
        setProducts(productsData);
        setIsLoading(false);
      } else {
        let productByCategory = productsData.filter(
          (product) => product.categoryId === categoryID
        );
        setProducts(productByCategory);
        setIsLoading(false);
      }
    });

    /* productsData.forEach((element) => {
      productsCollection.add({
        id : element.id,
        title : element.title,
        description : element.description,
        price : element.price,
        stock : element.stock,
        image : element.image,
        categoryId : element.categoryId
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    })  */

    return () => {};
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <ItemList products={products} />;
};

export default ItemListContainer;
