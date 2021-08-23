import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./actions/userActions";

import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";

// Admin
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";


import ScrollIntoView from "./components/ScrollIntoView";

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              BOOKS <span>SHOPEE</span>
            </Link>
          </div>
          <div className="nav-items">
            <Link to="/">Home</Link>
            <span>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="/">
                    {userInfo.name} <i className="fa fa-chevron-down"></i>{" "}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">View Orders</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </span>
            <span>
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link className="admin-heading" to="#admin">
                    Admin <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/userlist">Users</Link>
                    </li>
                    <li>
                      <Link to="/productlist">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Orders</Link>
                    </li>
                    {/* <li>
                    <Link to="/userlist">Users</Link>
                  </li> */}
                  </ul>
                </div>
              )}
            </span>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
          </div>
        </header>
        <main>
          <ScrollIntoView>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/payment" component={PaymentMethodScreen}></Route>
            <Route path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
            <PrivateRoute
              path="/profile"
              component={ProfileScreen}
            ></PrivateRoute>

            <AdminRoute
              path="/productlist"
              component={ProductListScreen}
            ></AdminRoute>
            <AdminRoute
              path="/orderlist"
              component={OrderListScreen}
            ></AdminRoute>
            <AdminRoute
              path="/userlist"
              component={UserListScreen}
            ></AdminRoute>
            <AdminRoute
              path="/user/:id/edit"
              component={UserEditScreen}
            ></AdminRoute>
            <Route
              path="/product/:id/edit"
              component={ProductEditScreen}
              exact
            ></Route>

            <Route path="/" component={HomeScreen} exact></Route>
          </ScrollIntoView>
        </main>
        <footer>
          <div className="inner-content">
            <p>
              Copyright &copy; 2021 Books Shopee. Pvt. Ltd. - Design:{" "}
              <Link to="/">Kartik Randeria</Link>
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
