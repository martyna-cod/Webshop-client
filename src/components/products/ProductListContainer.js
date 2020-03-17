import React from 'react';
import { ADD_ITEM_CART } from '../../actions/cart';
import { connect } from 'react-redux';
import ProductList from '../products/ProductList';


class ProductListContainer extends React.Component {
	state = {
		search: ''
	};

	handleOnKeyUp = (e) => {
		this.setState({ search: e.target.value });
	};

	render() {
		return (
			<ProductList
				products={this.props.products}
				onChange={this.handleOnKeyUp.bind(this)}
				value={this.state}
				user={this.props.user}
				category={this.props.category}
				onKeyUp={this.handleOnKeyUp}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products,
		user: state.user,
		category: state.category
	};
}

const mapDispatchToProps = { ADD_ITEM_CART };

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
