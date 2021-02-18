import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './itemdetail.css';
import ItemCount from '../itemcount/ItemCount';

const ItemDetail = ({ item }) => {
    const [ count, setCount] = useState(1);
    const [ statusButton, setStatusButton ] = useState(false);
    
    const handleInput = ( name, value ) => {    
        if( value <= item[0].stock){
            setCount(value);
        }else{
            console.log('no se puede!');
        }
    } 

    const onAdd = ( status, valueCount) => {
        setStatusButton(!status)
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
                    <p>Stock {item[0].stock}</p>
                    <hr/>
                    <p>{item[0].description}</p>
                    <div className="count-price">
                        <label>Precio: </label>
                        <span>S/.{item[0].price * count}</span>
                    </div>
                    {(statusButton) ? <Link to={'/cart'} className="btn-add-cart">Terminar Compra</Link> : <ItemCount stock={item[0].stock} initial={1} setCount={setCount} count={count} handleInput={handleInput} onAdd={onAdd}/>}
                </div>
                
            </aside>  
            
        </div>
    )
}

export default ItemDetail;