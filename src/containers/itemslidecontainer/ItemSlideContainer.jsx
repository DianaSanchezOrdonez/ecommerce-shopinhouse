import React, { useState, useEffect } from "react";

import SliderProducts from "../../components/sliderProducts/SliderProducts";
import Loader from "../../components/loader/Loader";

import { getFirestore } from "../../firebase/index";

const ItemSlideContainer = ({ categoryID }) => {
  const [products, setProducts] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    /*Conexión con la bd*/
    const db = getFirestore();

    /*Guardamos la referencia de la colección que queremos tomar*/
    const productsCollection = db.collection("Products");

    /*Tomamos los datos */
    productsCollection.limit(5).get().then((value) => {
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

    return () => {};
  }, [categoryID]);

  if (isLoading) {
    return <Loader />;
  }

  return(
      
    products.map((product) => { return <SliderProducts product={product} key={product.id} />})
        
  )
};

export default ItemSlideContainer;
