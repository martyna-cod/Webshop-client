import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Navbar, Form, FormControl, Nav} from 'react-bootstrap'
import { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { IoIosHeart } from "react-icons/io";

class Home extends Component {
	render() {
		return (
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


<div>
	<h1 style={{marginTop: "80px", marginLeft: "45px" }}>Running is a gift</h1>
				<p style={{fontSize: "35px", justifyContent: "center"}}>In our webshop you will find everything you need to get better progress and that can help you be more happy</p>
</div>
<LinkContainer style={{marginLeft: "50px"}} to="/products">
					<Button
					 type="Submit" className="btn-dark"
						
					 
					>
						See our products
					</Button>
				</LinkContainer>
        
			</div>
		)
	}
}

export default Home;
