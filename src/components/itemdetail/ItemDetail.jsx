import React, { useState } from 'react';

import './itemdetail.css';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    
    const handleInput = ( name, value ) => {
        setCount(value);
    }

    return (
        <div className="container">
            <main className="main-class">
                <div className="slider-img">
                    <img src={item[0].pictureUrl} />
                </div>
                <div className="description">
                    <h2>{item[0].name}</h2>
                    <p>{item[0].description}</p>
                    <div className="count-price">
                        <label>Cantidad: </label>
                        <input type="text" name="count" onChange = {(e) => handleInput(e.target.name, e.target.value)}/>
                        <label>Precio: </label>
                        <span>$ {item[0].price * count}</span>
                    </div>
                    <button className="btn-add-cart">Agregar al Carrito</button>
                </div>
            </main>
            {/* <aside className="aside-class">
                <div className="card-user">
                    <span>user01</span>
                    <span>1</span>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>

            </aside>  */}
            
        </div>
    )
}

export default ItemDetail;