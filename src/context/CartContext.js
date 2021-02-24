import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ defaultValue = [], children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
    
        if( isInCart(item.item.id) === -1 ){
            setCart([...cart, item])
        }else{
            console.log('entro a este camino: ', item.quantity)
            const newCart = [...cart];
            newCart.forEach(product => { 
                if(product.id === item.id) {
                    product.quantity += quantity
                };
            })
            setCart(newCart) 
        }  
    }

    const removeItem = (itemId) => {
        const cartRemove = cart.filter(product => product.id === itemId )
        setCart(cartRemove)
    }

    const clear = () => {
        setCart(defaultValue)
    }

    const isInCart = (id) => {
        return cart.findIndex(prod => prod.id === id) 
    }

    return (

        <CartContext.Provider value={{
                cart, 
                methods: {addItem, removeItem, clear, isInCart},
            }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;