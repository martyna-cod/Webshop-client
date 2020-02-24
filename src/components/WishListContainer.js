import React from "react";
import WishList from "./WishList";
import { connect } from "react-redux";
import { emptyCart } from "../actions/cart";

class WishListContainer extends React.Component {

  render() {
    return (
<div>
       
          <WishList
      
          wish={this.props.wish}
          products={this.props.products}
          total={this.props.total}  
          
          />
      
    </div> )}}
    
  

const mapStateToProps = state => {
  return {
  	products: state.products,
    wish: state.wish
  };
};

export default connect(
  mapStateToProps,
  { emptyCart }
)(WishListContainer);