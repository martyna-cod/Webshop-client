import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromWish } from '../actions/wish'

class WishList extends Component {
  handleremoveItemFromWish = id => {
    this.props.removeItemFromWish(id);
  };

  render() {
    return (
   
      <div>
      <div className="shopping-cart">
        <h6>{this.props.name}</h6>
        <img src={this.props.image} alt="" />
        <h6>€ {this.props.price}</h6>
        <div className="buttonsCart">
          <button
            className="button"
            onClick={() => this.handleremoveItemFromWish(this.props.id)}
          >
            Remove from wishlist
          </button>

        </div>
      
      </div></div>
    );
  }
}
const mapStateToProps = state => {
  return {
    wish: state.wish,
    products: state.products
  };
};

export default connect(
  mapStateToProps, { removeItemFromWish })(WishList);