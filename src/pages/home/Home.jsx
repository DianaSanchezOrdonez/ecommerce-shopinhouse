import React from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from '../../containers/itemdetailcontainer/ItemDetailContainer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const Home = () => {
    return(
        <section className='home'>
            <Breadcrumbs/>
            <ItemListContainer/>
            {/* <ItemDetailContainer/>  */}
        </section>
    )
}

export default Home;