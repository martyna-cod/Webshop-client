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
        {!this.props.products && <h2>No products in your cart.</h2>}
        {this.props.products.length > 0 &&
        this.props.products.map(product => (
          <ShoppingCart
            key={product.id}
            id={product.id}
            name={product.name}
            src={product.image}
            price={product.price}
          />
      
        ))}   
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { }
)(ShopingCartContainer);