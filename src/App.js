import React   from 'react';
import store from "./store"
import { Provider } from 'react-redux'
import { Route } from "react-router-dom";
import Home from "./components/Home"
import ProductListContainer from './components/ProductListContainer';
import LoginFormContainer from './components/LoginFormContainer'
import SignUpFormContainer from './components/SignUpFormContainer'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    
    <Provider store={store}>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUpFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/shopping-cart" component={ShoppingCartContainer} />
      <Route exact path="/product/product.id" component={ShoppingCartContainer} />
    <Route exact path="/products" component={ProductListContainer}/>

 
    </Provider>
  );
}

export default App;
