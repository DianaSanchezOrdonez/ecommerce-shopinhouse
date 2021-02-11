import React from 'react';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from '../../containers/itemdetailcontainer/ItemDetailContainer';

const Home = () => {
    return(
        <main className='home'>
            <ItemListContainer/>
            <ItemDetailContainer/> 
        </main>
    )
}

export default Home;