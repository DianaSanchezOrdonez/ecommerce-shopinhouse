import React, { useState } from 'react';

import './itemdetail.css';
import ItemCount from '../itemcount/ItemCount';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1);
    
    const handleInput = ( name, value ) => {
        console.log(value)
        setCount(value);
    }

    return (
        <div className="container">
            <main className="main-class">
                <div className="slider-img">
                    <img src={item[0].pictureUrl} />
                </div>
                
            </main>
            <aside className="aside-class">
                <div className="description">
                    <h2>{item[0].name}</h2>
                    <hr/>
                    <p>{item[0].description}</p>
                    <div className="count-price">
                        <label>Precio: </label>
                        <span>S/.{item[0].price * count}</span>
                    </div>
                    <ItemCount stock={10} initial={1} handleInput={handleInput}/>
                    
                </div>
                
            </aside>  
            
        </div>
    )
}

export default ItemDetail;