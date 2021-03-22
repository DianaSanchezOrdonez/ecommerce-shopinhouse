import React from "react";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import ItemSlideContainer from "../../containers/itemslidecontainer/ItemSlideContainer";

const Home = () => {
  return (
    <div className="container-all">
      <section className="home">
        <Slider />
        <ItemSlideContainer />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
