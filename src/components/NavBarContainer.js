import React, { Component } from "react";
import { getCategories } from '../actions/category';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class NavBarContainer extends React.Component {
	componentDidMount() {
	/* 	this.props.getCategories(); */
	}

	render() {
		
		return	<NavBar
					 category={this.props.category}
						pickCategory={this.pickCategory}
						 />
		
	}
}

/* function mapStateToProps(state) {
	console.log(state.category, "state kategori")
	return { category: state.category };
} */
export default NavBarContainer