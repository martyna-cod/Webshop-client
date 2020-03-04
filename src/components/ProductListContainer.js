import React from 'react';
import { SET_PRODUCTS_BY_CATEGORY } from '../actions/products';
import { ADD_ITEM_CART } from '../actions/cart';
import { connect } from 'react-redux';
import ProductList from './ProductList';

class ProductListContainer extends React.Component {
/* 	componentDidMount() {
		const id = this.props.match.params.categoryId
	this.props.setProductsByCategory(this.props.match.params.categoryId)
	} */


	render() {
		return <ProductList products={this.props.products} user={this.props.user} category={this.props.category}/>;
	}
}

function mapStateToProps(state) {
	return { products: state.products, user: state.user, category: state.category };
}

const mapDispatchToProps = { ADD_ITEM_CART, SET_PRODUCTS_BY_CATEGORY };

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
