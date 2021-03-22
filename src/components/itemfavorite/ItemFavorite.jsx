import React, { useContext } from "react";
import {Link} from "react-router-dom";
import {AiOutlineDelete} from "react-icons/ai";

import {FavoriteContext} from "../../context/FavoriteContext";

import "./itemfavorite.css";

const ItemFavorite = ({product}) => {

  const { methodsFavorite } = useContext(FavoriteContext);
  
  return (
    <div className="card d-flex-column">
      <Link /* to={`/item/${product.id}`} */>
        <div className="card-body d-flex-column">
          <button className="btn-delete-favorite" onClick={() => methodsFavorite.removeItemFavorite(product.item.id)}><AiOutlineDelete/></button>
          <img src={product.item.image} alt="" />
          <span className="span-name">{product.item.title}</span>
          <span className="span-price">$. {product.item.price}</span>
        </div>
      </Link>
    </div>
  )
};

export default ItemFavorite;
