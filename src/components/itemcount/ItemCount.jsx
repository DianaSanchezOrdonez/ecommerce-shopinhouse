import { React, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/fa";

const ItemCount = ({ stock, initial, count, handleInput, onAdd }) => { 
  const [ statusButtons, setStatusButtons ] = useState(false);
  
  const addCount = () => {
    if( count < stock){
      console.log('count', count)
      return count++
    }else{
      console.log('countElse', count)
      return count
    }
  };

  const lessCount = () => {
    if( count > 1){
      console.log('count', count)
      return count--
    }else{
      return count
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
          <button className="btn-cart" onClick={() => onAdd(statusButtons,count)}> Agregar al Carrito</button>
        </div> 
        
      
    </div>
  );
};

export default ItemCount;
