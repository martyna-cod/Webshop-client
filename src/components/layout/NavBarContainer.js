import React, { Component } from 'react';
import { getProducts } from '../../actions/products';
import { connect } from 'react-redux';
import NavBar from './NavBar';


class NavBarContainer extends React.Component {
	render() {
		return (
			<NavBar category={this.props.category} pickCategory={this.pickCategory} products={this.props.products} />
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products
});

export default connect(mapStateToProps, { getProducts })(NavBarContainer);
