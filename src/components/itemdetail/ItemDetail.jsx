import React, {useEffect, useState} from 'react';

import './itemdetail.css';

const ItemDetail = ({ item }) => {

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
                        <input type="text"/>
                        <label>Precio: </label>
                        <span>$ {item[0].price}</span>
                    </div>
                    <button className="btn-add-cart">Agregar al Carrito</button>
                </div>
            </main>
            <aside className="aside-class">
                <div className="card-user">
                    <span>user01</span>
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1</span>
                </div>

            </aside> 
            
                {/* <ul key = {item[0].id}>
                    <li>{ item[0].name }</li>
                </ul> */}
           
        </div>
    )
}

export default ItemDetail;