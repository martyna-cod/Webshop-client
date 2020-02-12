import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../actions/cart';

class ShoppingCart extends Component {
	handleremoveItemFromCart = (id) => {
		this.props.removeItemFromCart(id);
	};

	render() {
		return (
			<div>
				{this.props.name}
				<img src={this.props.image} alt="" />
				<h6>€ blabal{this.props.price}</h6>
				<div>
					<button className="button" onClick={() => this.handleremoveItemFromCart(this.props.id)}>
						Remove from cart
					</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		products: state.products,
		cart: state.cart
	};
};

export default connect(mapStateToProps, { removeItemFromCart })(ShoppingCart);
