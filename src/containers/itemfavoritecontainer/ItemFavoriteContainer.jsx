import React, {useContext} from 'react';

import { FavoriteContext } from "../../context/FavoriteContext";
import ItemFavorite  from "../../components/itemfavorite/ItemFavorite";

const ItemFavoriteContainer = () => {

    const FavoriteContextUse = useContext(FavoriteContext);
    console.log("FavoriteContextUse", FavoriteContextUse);

    return (
        FavoriteContextUse.arrayFavorite.map((product) => { return <ItemFavorite product={product} key={product.id} /> }) 
    )
}

export default ItemFavoriteContainer
