import { React } from "react";
import * as AiIcons from "react-icons/ai";

const ItemCount = ({ stock, setCount, count, handleInput, onAdd, onAddFavorite }) => {
  
  const addCount = () => {
    if (count < stock) {
      return setCount(count + 1);
    } else {
      return setCount(count);
    }
  };

  const lessCount = () => {
    if (count > 1) {
      return setCount(count - 1);
    } else {
      return setCount(count);
    }
  };

  return (
    <div className="card-controller d-flex-column">
      <div className="controlers">
        <i onClick={lessCount}>
          <AiIcons.AiOutlineMinus />
        </i>
        <input
          type="text"
          value={count}
          name="countItem"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
        />
        <i onClick={addCount}>
          <AiIcons.AiOutlinePlus />
        </i>
      </div>

      <div className="buttons">
        <button className="btn-favorite" onClick={() => onAddFavorite()}> Add to Favorites</button>
        <button className="btn-cart" onClick={() => onAdd(count)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
