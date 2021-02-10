import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';

import ItemList from '../../components/itemlist/ItemList';

import productList from '../../mocks/productList.js';

const ItemListContainer = ( { fxIdItem }) => {

    const [products, setProducts ] = useState([0]);
    const [isLoading, setIsLoading ] = useState(false);
    /* const [carrito, setCarrito] = useState([0]);

    const onAdd = () => {
        setCarrito([...carrito, {name: 'papitas'} ])
    } */

    useEffect(() => {
        setIsLoading(true);
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000)
        });

        getProducts
        .then((data) => {
            setProducts(data);
            setIsLoading(false);
        })
        .catch((error) => console.log(error))

        /* CONSUMO DE API 
        fetch('https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung')
        .then((result) => {return result.json()})
        .then((data) => console.log('data',data))
        .catch((error) => console.log(error)) */
        
    }, [])

    if( isLoading ) {
        return <h1>Cargando productos...</h1>
    }

    return (

        <ItemList products={products} />
      
    )
}

export default ItemListContainer;
