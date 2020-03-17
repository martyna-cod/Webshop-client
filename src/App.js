import React from 'react';
import store from './store';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { getProducts } from './actions/products';
import { getCategories } from './actions/category';
import Home from './components/layout/Home';
import ProductListContainer from './components/products/ProductListContainer';
import LoginFormContainer from './components/login/LoginFormContainer';
import SignUpFormContainer from './components/signup/SignUpFormContainer';
import ShoppingCartContainer from './components/shopping-cart&wish-list/ShoppingCartContainer';
import WishListContainer from './components/shopping-cart&wish-list/WishListContainer';
import NavBarContainer from './components/layout/NavBarContainer';
import Footer from './components/layout/Footer';
import addedToCartModal from './components/layout/AddedToCartModal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends React.Component {
	componentDidMount() {
		this.props.getCategories();
		this.props.getProducts();
	}

	render() {
		return (
			<Provider store={store}>
				<Route
					path
					render={(props) => (
						<NavBarContainer products={this.props.products} category={this.props.category} />
					)}
				/>
				<Route exact path="/" component={Home} />
				<Route exact path="/sign-up" component={SignUpFormContainer} />
				<Route exact path="/login" component={LoginFormContainer} />
				<Route exact path="/shopping-cart" component={ShoppingCartContainer} />
				<Route
					exact
					path="/products"
					render={(props) => <ProductListContainer products={this.props.products} />}
				/>
				<Route exact path="/wish-list" component={WishListContainer} />
				<Route exact path="/modal" component={addedToCartModal} />
				<Footer />
			</Provider>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
		category: state.category
	};
};
export default connect(mapStateToProps, { getCategories, getProducts })(App);
