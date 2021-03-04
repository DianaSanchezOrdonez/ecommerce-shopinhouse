import { Link } from "react-router-dom";

const SliderProducts = ({ product }) => {
  /*  console.log('products', products) */
  return(
    
        <div className="card d-flex-column">
        <Link to={`/item/${product.id}`}>
            <div className="card-body d-flex-column">
            <img src={product.image} alt="" />
            <span className="span-name">{product.title}</span>
            <span className="span-price">$ {product.price}</span>
            </div>
        </Link>
        </div>  
   
    )
};

export default SliderProducts;
