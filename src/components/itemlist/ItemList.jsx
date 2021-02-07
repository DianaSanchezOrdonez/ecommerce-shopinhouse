const ItemList = ({ products }) => {
  return (
    <div className='container'>
      {products.map((product) => {
        return (
          <div className="card d-flex-column">
            <div className="card-body d-flex-column">
              <img src={product.pictureUrl} alt="" />
              <span>{product.name}</span>
              <span className="price">$ {product.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
