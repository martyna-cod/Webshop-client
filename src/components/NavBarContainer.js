import React, { Component } from 'react';
import { searchProducts } from '../actions/products';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class NavBarContainer extends React.Component {
	state = { search: '' };

	onSubmit = (event) => {
		event.preventDefault();
		this.props.searchProducts(this.state.search);
        this.setState({ search: '' });
    };
	onChange = (event) => {
		console.log('onchange');
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<NavBar
				category={this.props.category}
				pickCategory={this.pickCategory}
				onChange={this.onChange}
				onSubmit={this.onSubmit}
				value={this.state}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products
});

export default connect(mapStateToProps, { searchProducts })(NavBarContainer);
