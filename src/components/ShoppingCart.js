import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from '../actions/cart'
import { Link } from "react-router-bootstrap"

class ShoppingCart extends Component {
  handleremoveItemFromCart = id => {
    this.props.removeItemFromCart(id);
  };

  render() {
    return (
      <div>
       <div>
        <Link to="/products" > See products </Link>
      </div>
      <div>
      <div className="shopping-cart">
        <h6 style={{textAlign: "center"}}>{this.props.name}</h6>
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
      
      </div></div></div>
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