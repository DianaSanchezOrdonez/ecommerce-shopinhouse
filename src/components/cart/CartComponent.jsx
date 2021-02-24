import React, {useContext} from 'react';
import {cartContext} from '../../context/CartContext';

const CartComponent = () => {

    const CartContextUse = useContext(cartContext);

    console.log('CartContextUse', CartContextUse)

    return (
        <>
            <h1>Hola, soy el carrito!</h1>
        </>
    )
}

export default CartComponent
