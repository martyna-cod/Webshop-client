import React from 'react';
import { NavDropdown, Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IoIosHeart } from 'react-icons/io';
import { IoMdCart } from 'react-icons/io';
import { IoIosPerson } from 'react-icons/io';

export default function NavBar() {
	return (

<div className="navBar">
		<Nav className="justify-content-center" activeKey="/home">
			<div className="navbar-links">
			<LinkContainer style={{ padding: '5px' }} to="/products">
					<Nav className="links" active>
						pro
					</Nav>
				</LinkContainer>
		<Nav.Item>
		  <Nav.Link href="link-1">Link</Nav.Link>
		</Nav.Item>
		<Nav.Item>
		  <Nav.Link href="/products">Products</Nav.Link>
		</Nav.Item>
		<Nav.Item>
		  <Nav.Link eventKey="disabled" disabled>
			Disabled
		  </Nav.Link>
		</Nav.Item>
		
		<NavDropdown title="Ladies" id="basic-nav-dropdown">
						<NavDropdown.Item style={{color: "rgb(229, 9, 20)"}} href="#action/3.1">Shoes</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Shirts</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Men" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Shirts</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					</div>
					<div className="search-form">
					<Form inline style={{marginRight: "1px"}}>
					<FormControl type="text" placeholder="Search" className="form-control mr-sm-1" />
					<Button className="button-search-bar"variant="primary outline-danger" >Search</Button>
				</Form>
				</div>
				<div className="icons">
				<LinkContainer style={{ padding: '5px' }} to="/wish-list">
					<Nav className="links" active>
						<IoIosHeart />
					</Nav>
				</LinkContainer>
				<LinkContainer style={{ padding: '5px' }} to="/shopping-cart">
					<Nav className="links" active>
						<IoMdCart />
					</Nav>
				</LinkContainer>
				<LinkContainer style={{ padding: '5px' }} to="/login">
					<Nav className="links" active>
						<IoIosPerson />
					</Nav>
				</LinkContainer>
				</div>
	  </Nav>

	  </div>
				
		
	);
}
