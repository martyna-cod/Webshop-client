import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";


class ShopingCartContainer extends React.Component {

  render() {
    return (
      <div>
      <div>
        <h4>Shopping Cart</h4>
     
        </div>
        <div>
        {!this.props.cart && <h2>No products in your cart.</h2>}
        {this.props.cart.length > 0 &&
        this.props.cart.map(product => (
          <ShoppingCart
          cart={this.props.cart}
          />
      
        ))}   
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,

  };
};

export default connect(
  mapStateToProps,
  { }
)(ShopingCartContainer);