import { React, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/fa";

const ItemCount = ({ stock, initial, setCount, count, handleInput, onAdd }) => { 
  const [ statusButtons, setStatusButtons ] = useState(false);

  const addCount = () => {
    if( count < stock){
      return setCount(count+1)
    }else{
      return setCount(count)
    }
  };

  const lessCount = () => {
    if( count > 1){
      console.log('count', count)
      return setCount(count-1)
    }else{
      return setCount(count)
    }
  }  

  return (
    <div className="card-controller d-flex-column">
      <div className="controlers">
        <i onClick={lessCount}>
          <AiIcons.AiOutlineMinus />
        </i>
        <input type="text" value={count} name="countItem" onChange={(e) => handleInput(e.target.name, e.target.value)}/>
        <i onClick = {addCount}>
          <AiIcons.AiOutlinePlus />
        </i>
      </div>
      
        {/* { (statusButtons) ? null : <div className="buttons">
        <button className="btn-favorite"> Agregar a Favoritos</button>
        <button className="btn-cart" onClick={() => onAdd(countItem)}> Agregar al Carrito</button>
        </div> } */}

        <div className="buttons">
          <button className="btn-favorite"> Agregar a Favoritos</button>
          <button className="btn-cart" onClick={() => onAdd(count)}> Agregar al Carrito</button>
        </div> 
        
      
    </div>
  );
};

export default ItemCount;
