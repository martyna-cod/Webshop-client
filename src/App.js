import React   from 'react';
import store from "./store"
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { Route } from "react-router-dom";
import Home from "./components/Home"
import ProductListContainer from './components/ProductListContainer';
import LoginFormContainer from './components/LoginFormContainer'
import SignUpFormContainer from './components/SignUpFormContainer'
import ShoppingCartContainer from './components/ShoppingCartContainer'
import WishListContainer from './components/WishListContainer'
import NavBarContainer from './components/NavBarContainer'
import Footer from './components/Footer'
import ProductDetailsContainer from './components/ProductDetailsContainer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 
import { getProducts } from "./actions/products"
import { getCategories } from "./actions/category"

class App extends React.Component {
	componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
  }
  render () {
  return (
    <Provider store={store}>
      <Route path render={(props) => <NavBarContainer category={this.props.category}  />} />
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUpFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/shopping-cart" component={ShoppingCartContainer} />
      <Route exact path="/product/:productId" component={ProductDetailsContainer} />
      <Route exact path="/products" render={(props) => <ProductListContainer products={this.props.products}  />} />
      <Route exact path="/wish-list" component={WishListContainer} />
      <Footer/>
    </Provider>
  );
  }
}

function mapStateToProps(state) {
  return { category: state.category,
           products: state.products };
}
export default connect(
	mapStateToProps,
	{ getCategories, getProducts }
)(App);

  
