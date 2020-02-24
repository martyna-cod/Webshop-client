import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";

class ShopingCartContainer extends React.Component {

  render() {
    return (
<div>
       
          <ShoppingCart
      
          cart={this.props.cart}
          products={this.props.products}
          total={this.props.total}  
          
          />
      
    </div> )}}
    
  

const mapStateToProps = state => {
  return {
  	products: state.products,
    cart: state.cart.cart,
    total: state.cart.total.toFixed(2)
  };
};

export default connect(
  mapStateToProps,
  { }
)(ShopingCartContainer);