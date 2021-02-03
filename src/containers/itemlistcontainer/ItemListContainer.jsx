import { React, useState } from 'react';
import ItemCount from '../../components/itemcount/ItemCount';

const ItemListContainer = ({greeting}) => {
    const [carrito, setCarrito] = useState([0]);

    const onAdd = () => {
        setCarrito([...carrito, {name: 'papitas'} ])
    }

    console.log(carrito, 'carrito');

    return (
        <main className='home'>
            {/* <h1>Saludos del prop {greeting}!</h1> */}
            <ItemCount stock='5' initial='1'/>
            <ItemCount stock='5' initial='1'/>
            <ItemCount stock='5' initial='1'/>
            <ItemCount stock='5' initial='1'/>
            <ItemCount stock='5' initial='1'/>
            <ItemCount stock='5' initial='1'/>
        </main>
    )
}

export default ItemListContainer;
