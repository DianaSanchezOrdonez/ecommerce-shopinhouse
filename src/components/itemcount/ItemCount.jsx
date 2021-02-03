import { React, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/fa";

import "./itemcount.css";

import pruebaimg from "../../assets/producto01.jpg";

const ItemCount = ({ stock, initial}) => {
  const [count, setCount] = useState(parseInt(initial));

  const onAdd = () => {
    if( count < stock){
        setCount(count+1);
    }else{
        setCount(count);
    }
    
  };

  const onLess = () => {
    if( count > 0){
        setCount(count-1);
    }else{
        setCount(count);
    }
  }

  return (
    <div className="card d-flex-column">
      <div className="card-body d-flex-column">
        <img src={pruebaimg} alt="" />
        <span>Papas Fritas INKA CHIPS Bolsa 142g</span>
        <span className="price">$10.00</span>
      </div>
      <div className="controlers">
        <i onClick={onLess}>
          <AiIcons.AiOutlineMinus />
        </i>
        <span>{count}</span>
        <i onClick = {onAdd}>
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
