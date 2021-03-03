import React from "react";
import { Link } from "react-router-dom";
import ItemSlideContainer from "../../containers/itemslidecontainer/ItemSlideContainer";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Slider from '../../components/slider/Slider';
import SliderProducts from '../../components/sliderProducts/SliderProducts';

const Home = () => {
  return (
    <section className="home">
      {/* <Breadcrumbs/> */}
      <Slider/>
      <SliderProducts />
      {/* <ItemDetailContainer/>  */}
    </section>
  );
};

export default Home;
