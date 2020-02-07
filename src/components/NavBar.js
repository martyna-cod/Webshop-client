import React from 'react';
import { NavDropdown, Dropdown, Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IoIosHeart } from 'react-icons/io';
import { IoMdCart } from 'react-icons/io';
import { IoIosPerson } from 'react-icons/io';

export default function NavBar() {
	return (

<div className="navBar">
		<Nav className="justify-content-center" activeKey="/home">
			<div className="navbar-links">
			<Dropdown>
  <Dropdown.Toggle variant= "primary" style={{color: "black", backgroundColor: "white"}} >
    Women
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Shoes</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Sport Bra</Dropdown.Item>
    <Dropdown.Item href="#/action-3">T-Shirts & Tops</Dropdown.Item>
	<Dropdown.Item href="#/action-3">Shorts</Dropdown.Item>
	<Dropdown.Item href="#/action-3">Leggins</Dropdown.Item>
	<Dropdown.Item href="#/action-3">Hoodie & Sweatshirts</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

			<Dropdown>
  <Dropdown.Toggle variant= "primary" style={{color: "black", backgroundColor: "white"}} >
    Men
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Shoes</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Stringers</Dropdown.Item>
    <Dropdown.Item href="#/action-3">T-Shirts</Dropdown.Item>
	<Dropdown.Item href="#/action-3">Shorts</Dropdown.Item>
	<Dropdown.Item href="#/action-3">Leggins</Dropdown.Item>
	<Dropdown.Item href="#/action-3">Hoodie & Sweatshirts</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
					
		
				<LinkContainer className="navbar-link" to="/products">
					<Nav className="links" active>
						Collection
					</Nav>
				</LinkContainer>
		<Nav.Item>
		  	<LinkContainer className="navbar-link" to="/products">
					<Nav className="links" active>
						Sale
					</Nav>
				</LinkContainer>
		</Nav.Item>
		
	
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
