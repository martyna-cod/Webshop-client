import React from "react";
import WishList from "./WishList";
import { connect } from "react-redux";

class WishListContainer extends React.Component {

  render() {
    return (
      <div>
      <div className="wish-list">


     <h3>WISH LIST</h3>
        </div>
        <div>
        {!this.props.wish && <h2>No products on your wish list.</h2>}
        {this.props.wish.length > 0 &&
        this.props.wish.map(product => (
          <WishList
          wish={this.props.wish}
          />
      
        ))}   
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wish: state.wish,

  };
};

export default connect(
  mapStateToProps,
  { }
)(WishListContainer);