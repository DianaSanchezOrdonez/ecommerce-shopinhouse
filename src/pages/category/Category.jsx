import React from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ItemListContainer from "../../containers/itemlistcontainer/ItemListContainer";

const Categoria = () => {
  const { categoryID } = useParams();

  return (
    <section className="home">
      <Breadcrumbs optionsMenu={[{name:"Category", status:true, url:"/category"}]}/> 
      <ItemListContainer categoryID={categoryID} />
    </section>
  );
};

export default Categoria;
