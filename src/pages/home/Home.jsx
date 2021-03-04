import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Slider from '../../components/slider/Slider';
import ItemSlideContainer from '../../containers/itemslidecontainer/ItemSlideContainer';

const Home = () => {
  return (
    <section className="home">
      {/* <Breadcrumbs/> */}
      <Slider/>
      <ItemSlideContainer />
      {/* <ItemDetailContainer/>  */}
    </section>
  );
};

export default Home;
