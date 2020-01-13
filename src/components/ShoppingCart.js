import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from '../actions/cart'

class ShoppingCart extends Component {
  handleremoveItemFromCart = id => {
    this.props.removeItemFromCart(id);
  };

  render() {
    return (
      <div className="shopping-cart">
        <h6>{this.props.name}</h6>
        <img src={this.props.image} alt="" />
        <h6>€ {this.props.price}</h6>
        <div className="buttonsCart">
          <button
            className="button"
            onClick={() => this.handleremoveItemFromCart(this.props.id)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    cart: state.cart,
    products: state.products
  };
};

export default connect(
  mapStateToProps, { removeItemFromCart })(ShoppingCart);