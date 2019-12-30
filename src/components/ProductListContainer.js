import React from 'react';
import { getProducts } from '../actions/products'
import { ADD_ITEM_CART } from '../actions/cart'
import { connect } from 'react-redux';
import ProductList from './ProductList'

class ProductListContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts();
        console.log("props", this.props)
    }

    render() {
        return <ProductList products={this.props.products} 
        user={this.props.user} />;
    }
}

function mapStateToProps(state) {
    return { products: state.products, user: state.user };
}

const mapDispatchToProps = { getProducts, ADD_ITEM_CART };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListContainer);