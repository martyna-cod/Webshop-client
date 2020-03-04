import React from 'react'
import ProductDetails from "./ProductDetails"
import { getProduct } from '../actions/products'
import { connect } from 'react-redux'


class ProductDetailsContainer extends React.Component {

    componentDidMount(){
        console.log(this.props.match.params.productId, "match props")
        this.props.getProduct(this.props.match.params.productId)
    }
        render() {
            console.log(this.props.product, "propsy w contenerze")
            return <ProductDetails product={this.props.product} 
            />;
        }
    }
    function mapStateToProps(state) {
        return {
             product: state.products,
};
    }
    
    const mapDispatchToProps = { getProduct };
    
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(ProductDetailsContainer);