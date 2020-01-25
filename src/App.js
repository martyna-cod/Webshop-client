import React   from 'react';
import store from "./store"
import { Provider } from 'react-redux'
import { Route } from "react-router-dom";
import Home from "./components/Home"
import ProductListContainer from './components/ProductListContainer';
import LoginFormContainer from './components/LoginFormContainer'
import SignUpFormContainer from './components/SignUpFormContainer'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import WishListContainer from './components/WishListContainer'
import CategoryContainer from './components/CategoryContainer'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import ProductDetailsContainer from './components/ProductDetailsContainer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUpFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/shopping-cart" component={ShoppingCartContainer} />
      <Route exact path="/product/:productId" component={ProductDetailsContainer} />
      <Route exact path="/products" component={ProductListContainer}/>
      <Route exact path="/wish-list" component={WishListContainer} />
      <Route exact path="/category" component={CategoryContainer} />
    </Provider>
  );
}

export default App;
