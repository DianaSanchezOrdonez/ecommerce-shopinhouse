import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import ItemSlideContainer from "../../containers/itemslidecontainer/ItemSlideContainer";

const Home = () => {
  return (
    <div className="container-all d-flex-column">
      <section className="home">
        {/* <Breadcrumbs/> */}
        <Slider />
        <ItemSlideContainer />
        {/* <ItemDetailContainer/>  */}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
