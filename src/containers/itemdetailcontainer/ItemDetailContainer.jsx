import React, { useState, useEffect } from 'react';

import detailProduct from '../../mocks/detailProducts';
import ItemDetail from '../../components/itemdetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {

        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(detailProduct), 2000)     
        });

        getItems
        .then((data) => setItem(data))
        .catch((error) => console.log(error))

    }, [])

    return (
        
        <ItemDetail item = {item}/> 
    )
}

export default ItemDetailContainer;