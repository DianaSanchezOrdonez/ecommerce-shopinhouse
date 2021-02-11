import React, { useState, useEffect } from 'react';

import ItemDetail from '../../components/itemdetail/ItemDetail';
import detailProduct from '../../mocks/detailProducts';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([0]);

    useEffect(() => {

        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(detailProduct), 2000)     
        });

        getItems
        .then((data) => setItem(data))
        .catch((error) => console.log(error))

    }, [])

    return (
        
        <ItemDetail item={item}/> 
    )
}

export default ItemDetailContainer;