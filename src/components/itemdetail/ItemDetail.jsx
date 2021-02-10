import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            
                <ul key = {item[0].id}>
                    <li>{ item[0].name }</li>
                </ul>
           
        </div>
    )
}

export default ItemDetail;