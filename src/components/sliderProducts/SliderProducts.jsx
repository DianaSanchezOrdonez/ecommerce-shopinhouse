import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const SliderProducts = ({ product }) => {
  /*  console.log('products', products) */
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3ertfc829vzop.cloudfront.net/img/topo-map-50.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3ertfc829vzop.cloudfront.net/img/topo-map-50.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    /* return(
    <div className="card d-flex-column">
      <Link to={`/item/${product.id}`}>
        <div className="card-body d-flex-column">
          <img src={product.image} alt="" />
          <span className="span-name">{product.title}</span>
          <span className="span-price">S/. {product.price}</span>
        </div>
      </Link>
    </div>  
    )*/
  );
};

export default SliderProducts;
