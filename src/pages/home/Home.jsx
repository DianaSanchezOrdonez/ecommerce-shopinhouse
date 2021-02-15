import React from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from '../../containers/itemdetailcontainer/ItemDetailContainer';

const Home = () => {
    return(
        <main className='home'>
            <ItemListContainer/>
            <ItemDetailContainer/> 
            <Link to={'/favoritos'}><b>Ir a Favoritos</b></Link>
        </main>
    )
}

export default Home;