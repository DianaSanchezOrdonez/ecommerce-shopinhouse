import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import productList from '../../mocks/productList';
import ItemListContainer from '../../containers/itemlistcontainer/ItemListContainer';

const Categoria = () => {
    const { categoriaID } = useParams();
    const [ filterProduct, setFilterProduct ] = useState([0]);

    /* useEffect(() => {
        
       let productByCategory = productList.filter(product => { return product.category.toString() === categoriaID })

        setFilterProduct(productByCategory);

        console.log('filterProduct', filterProduct)
        return () => {
            
        }
    }, [categoriaID])
 */
    return(
        <section className='home'>

           <ItemListContainer categoriaID={categoriaID} />

        </section>
    )
}

export default Categoria;