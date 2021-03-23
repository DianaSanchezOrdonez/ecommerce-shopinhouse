import React from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ItemDetailContainer from "../../containers/itemdetailcontainer/ItemDetailContainer";

const Detalle = () => {
  return (
    <section className="home">
      <Breadcrumbs optionsMenu={[{name:"Detail", status:true, url:""}]}/>
      <ItemDetailContainer />
    </section>
  );
};

export default Detalle;
