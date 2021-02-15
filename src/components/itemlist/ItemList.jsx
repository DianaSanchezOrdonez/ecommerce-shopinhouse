const ItemList = ({ products }) => {
  console.log('products', products)
  return (
    <div className='container'>
      {products.map((product) => {
        return (
          <div className="card d-flex-column" >
            <div className="card-body d-flex-column">
              <img src={product.pictureUrl} alt="" />
              <span className="span-name">{product.name}</span>
              <span className="span-price">S/. {product.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
