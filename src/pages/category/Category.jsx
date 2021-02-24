import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';

const Categoria = () => {
    const { categoryID } = useParams();
    
    return(
        <section className='home'>

           <ItemListContainer categoryID={categoryID} />

        </section>
    )
}

export default Categoria;