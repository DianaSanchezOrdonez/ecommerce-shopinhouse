import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Footer from "../../components/footer/Footer";
import Slider from '../../components/slider/Slider';
import ItemSlideContainer from '../../containers/itemslidecontainer/ItemSlideContainer';

const Home = () => {
  return (
    <section className="home">
      {/* <Breadcrumbs/> */}
      <Slider/>
      <ItemSlideContainer />
      <Footer />
      {/* <ItemDetailContainer/>  */}
    </section>
  );
};

export default Home;
