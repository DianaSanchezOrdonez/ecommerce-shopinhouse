import { React, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/fa";

import pruebaimg from "../../assets/producto01.jpg";

const ItemCount = ({ stock, initial, onAdd}) => {
  const [count, setCount] = useState(parseInt(initial));

  const addCount = () => {
    if( count < stock){
        setCount(count+1);
    }else{
        setCount(count);
    } 
  };

  const lessCount = () => {
    if( count > 0){
        setCount(count-1);
    }else{
        setCount(count);
    }
  }

  return (
    <div className="card d-flex-column">
      <div className="controlers">
        <i onClick={lessCount}>
          <AiIcons.AiOutlineMinus />
        </i>
        <span>{count}</span>
        <i onClick = {addCount}>
          <AiIcons.AiOutlinePlus />
        </i>
      </div>
      <div className="buttons">
        <button className="btn-favorite"> Agregar a Favoritos</button>
        <button className="btn-cart"> Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
