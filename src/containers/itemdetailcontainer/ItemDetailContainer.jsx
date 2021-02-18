import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemdetail/ItemDetail';
import detailProduct from '../../mocks/detailProducts';


const ItemDetailContainer = () => {
    const { itemID } = useParams();
    const [item, setItem] = useState([0]);

    useEffect(() => {

        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(detailProduct), 2000)     
        });

        getItems
        .then((data) => {
            let filterDetail = data.filter(el => {return el.id.toString() === itemID})
            setItem(filterDetail)
        })
        .catch((error) => console.log(error))

    }, [])

    return (
        
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;