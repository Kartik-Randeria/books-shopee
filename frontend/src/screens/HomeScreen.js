import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen() {

  /*  // react-hook to fetch product from backend, default value of use state is [] empty array
    const [products, setProducts] = useState([]);
  
    // hooks for loading and error, default value is false
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  */

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;


  /*  // after rendering the component useEffect() will run
    // it sends an ajax reques to backend and fetch products from backend
    useEffect(() => {
      const fecthData = async () => {
        try {
          setLoading(true);
          // the array in backend is transferred to data i.e. ajax request to get list of products
          const { data } = await axios.get('/api/products');
          setLoading(false);
          setProducts(data);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fecthData();
    }, []);
  */

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="container">
          <Banner></Banner>
          <div className="product-list">
            <div className="section-heading">
              <h2>Newly Pulished Books</h2>
              <Link to="/" className="view-products">view all books <i className="fa fa-angle-right"></i></Link>
            </div>
            <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default HomeScreen
