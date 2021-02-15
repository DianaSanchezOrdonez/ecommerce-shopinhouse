import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from '../../containers/itemdetailcontainer/ItemDetailContainer';

const Categoria = () => {
    const { categoriaID } = useParams();
    return(
        <main className='home'>
           <ItemListContainer/> 
           <h1>HOLA {categoriaID}</h1>
        </main>
    )
}

export default Categoria;