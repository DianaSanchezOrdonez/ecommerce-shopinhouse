import React from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ItemFavoriteContainer from "../../containers/itemfavoritecontainer/ItemFavoriteContainer";

const Favoritos = () => {
  return (
    <>
      <Breadcrumbs optionsMenu={[{name:"Favorite", status:true, url:"/favorite"}]}/>
      <ItemFavoriteContainer />
    </>
  )
};

export default Favoritos;
