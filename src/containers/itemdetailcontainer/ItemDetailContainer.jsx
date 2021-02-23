import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemdetail/ItemDetail';

const ItemDetailContainer = () => {
    const { itemID } = useParams();
    const [item, setItem] = useState([0]);

    useEffect(() => {

        const getProducts = fetch('https://fakestoreapi.com/products');

        getProducts
        .then(result => result.json())
        .then((data) => {
            let filterDetail = data.filter(el => el.id.toString() === itemID )
            setItem(filterDetail)
        })
        .catch((error) => console.log(error))

    }, [])

    return (
        
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;