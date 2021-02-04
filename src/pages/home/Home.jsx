import React from 'react';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';

const Home = () => {
    return(
        <main className='home'>
            <ItemListContainer greeting='Home' />
        </main>
    )
}

export default Home;