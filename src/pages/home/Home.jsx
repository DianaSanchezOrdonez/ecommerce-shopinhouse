import React from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from '../../containers/itemdetailcontainer/ItemDetailContainer';

const Home = () => {
    return(
        <section className='home'>
            <ItemListContainer/>
            {/* <ItemDetailContainer/>  */}
        </section>
    )
}

export default Home;