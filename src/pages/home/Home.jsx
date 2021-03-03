import React from "react";
import { Link } from "react-router-dom";
import ItemListContainer from "../../containers/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "../../containers/itemdetailcontainer/ItemDetailContainer";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Slider from '../../components/slider/Slider';

const Home = () => {
  return (
    <section className="home">
      {/* <Breadcrumbs/> */}
      <Slider/>
      <ItemListContainer />
      {/* <ItemDetailContainer/>  */}
    </section>
  );
};

export default Home;
