import React   from 'react';
import store from "./store"
import { Provider } from 'react-redux'
import { Route } from "react-router-dom";
import Home from "./components/Home"
import ProductListContainer from './components/ProductListContainer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Provider store={store}>
      <Route exact path="/" component={Home} />
    <Route exact path="/products" component={ProductListContainer}/>
    </Provider>
  );
}

export default App;
