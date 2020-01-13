import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";
import { Button, Navbar, Form, FormControl, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class ShopingCartContainer extends React.Component {

  render() {
    return (
      <div>
      <div>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Webhop</Navbar.Brand>
    <Nav className="mr-auto">
    <ion-icon name="IoIosHeart"></ion-icon>
	<LinkContainer style={{padding: "5px"}} to="/products" >
                    <Nav active>
                    Our products 
                    </Nav>
                    </LinkContainer> 
					<LinkContainer  style={{padding: "5px"}}to="/shopping-cart" >
                    <Nav className="links" active>
                    Cart
                    </Nav>
                    </LinkContainer> 
					<LinkContainer  style={{padding: "5px"}}to="/products" >
                    <Nav className="links" active>
                    Contact
                    </Nav>
                    </LinkContainer> 

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    
    </Form>
  </Navbar>

     <h3>Shopping cart</h3>
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