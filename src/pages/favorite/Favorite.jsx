import React from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ItemFavoriteContainer from "../../containers/itemfavoritecontainer/ItemFavoriteContainer";

const Favoritos = () => {
  return (
    <section className="home">
      <Breadcrumbs optionsMenu={[{name:"Favorite", status:true, url:"/favorite"}]}/>
      <ItemFavoriteContainer />
    </section>
  )
};

export default Favoritos;
