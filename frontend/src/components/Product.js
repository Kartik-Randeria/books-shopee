import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
        <div className="card-body">

          <div className="title-price">
            <div className="title">{product.name}</div>
            <div className="price">₹{product.price}</div>
          </div>

          <p>{product.description}</p>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
        </div>
      </Link>


    </div>
  )
}

export default Product
