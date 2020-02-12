import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";
import { emptyCart } from "../actions/cart";

class ShopingCartContainer extends React.Component {
  handleemptyCart = id => {
	console.log("fdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfsf")
    this.props.emptyCart(id);
  };

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <button
          className="button"
          onClick={() => this.handleemptyCart(this.props.id)}
        >
          Empty cart
        </button>
        {this.props.cart.map(product => (
          <ShoppingCart
            key={product.id}	
            id={product.id}
            name={product.name}
            src={product.image	}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { emptyCart }
)(ShopingCartContainer);