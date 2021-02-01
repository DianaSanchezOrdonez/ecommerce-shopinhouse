import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <main className='home'>
            <h1>Saludos del prop {greeting}!</h1>
        </main>
    )
}

export default ItemListContainer;
