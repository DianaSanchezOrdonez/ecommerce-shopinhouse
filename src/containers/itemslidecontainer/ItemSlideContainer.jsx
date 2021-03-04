import React, { useState, useEffect } from "react";

import SliderProducts from "../../components/sliderProducts/SliderProducts";
import Loader from "../../components/loader/Loader";

import { getFirestore } from "../../firebase/index";

import "./itemslidecontainer.css";

const ItemSlideContainer = ({}) => {
  const [products, setProducts] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    /*Conexión con la bd*/
    const db = getFirestore();

    /*Guardamos la referencia de la colección que queremos tomar*/
    const productsCollection = db.collection("Products");

    /*Tomamos los datos */
    productsCollection
      .limit(8)
      .get()
      .then((value) => {
        /* value.docs.map(product => console.log({...product.data(), id:product.id}))  */
        let productsData = value.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(productsData);
        setIsLoading(false);
      });

    return () => {};
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container-slider">
      <div class="slider-items">
        {products.map((product) => {
          return <SliderProducts product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemSlideContainer;

{
  /* <div class="container">
    <div class="flechas">
        <div class="f-izq"></div>
        <div class="f-der"></div>
    </div>
    <!--*******************   ITEMS *******************-->
    <div class="items">
        <div class="carta">
            <p class="nombre">Messi</p><img src="http://media.cubadebate.cu/wp-content/uploads/2019/05/Messi-bota-de-oro-e1558749680241.jpg" />
            <p class="bajada">Lorem Ipsum alguno</p>
        </div>
        <div class="carta">
            <p class="nombre">Messi</p><img src="http://media.cubadebate.cu/wp-content/uploads/2019/05/Messi-bota-de-oro-e1558749680241.jpg" />
            <p class="bajada">Lorem Ipsum alguno</p>
        </div>
        <div class="carta">
            <p class="nombre">Messi</p><img src="http://media.cubadebate.cu/wp-content/uploads/2019/05/Messi-bota-de-oro-e1558749680241.jpg" />
            <p class="bajada">Lorem Ipsum alguno</p>
        </div>
        <div class="carta">
            <p class="nombre">Messi</p><img src="http://media.cubadebate.cu/wp-content/uploads/2019/05/Messi-bota-de-oro-e1558749680241.jpg" />
            <p class="bajada">Lorem Ipsum alguno</p>
        </div>
        <div class="carta">
            <p class="nombre">Messi</p><img src="http://media.cubadebate.cu/wp-content/uploads/2019/05/Messi-bota-de-oro-e1558749680241.jpg" />
            <p class="bajada">Lorem Ipsum alguno</p>
        </div>
        <div class="carta">
            <p class="nombre">Messi</p><img src="http://media.cubadebate.cu/wp-content/uploads/2019/05/Messi-bota-de-oro-e1558749680241.jpg" />
            <p class="bajada">Lorem Ipsum alguno</p>
        </div>
    </div>
    <!--*******************  ITEMS ****************-->
</div>
 */
}
