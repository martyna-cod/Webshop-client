import React from "react";
import WishList from "./WishList";
import { connect } from "react-redux";
import { Button, Navbar, Form, FormControl, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class WishListContainer extends React.Component {

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
                    	<LinkContainer  style={{padding: "5px"}}to="/wish-list" >
                    <Nav className="links" active>
                    Wish List
                    </Nav>
                    </LinkContainer> 

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    
    </Form>
  </Navbar>

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