import React from 'react';
import { Navbar, Form, FormControl, Dropdown,DropdownButton, Nav,  Button, Card, Container } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import ProductCard from './ProductCard'


export default function ProductList(props) {
	return (
		<div>
<div>
		<Navbar bg="light" variant="light">
		<Navbar.Brand href="#home">Webhop</Navbar.Brand>
		<Nav className="mr-auto">
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
						<LinkContainer  style={{padding: "5px"}}to="/login" >
						<Nav className="links" active>
						My account
						</Nav>
						</LinkContainer> 
		</Nav>
		<Form inline>
		  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		  <Button variant="outline-primary">Search</Button>
		</Form>
	  </Navbar>
	  </div>




	  <div>
			<h1>Products</h1>
			<DropdownButton
				variant="light"
				id="dropdown-basic-button"
				title="Sort products by price: "
			>
				<Dropdown.Item onClick={() => props.sortProductsByPrice("LOW_TO_HIGH")}>
					low to high
				</Dropdown.Item>
				<Dropdown.Item onClick={() => props.sortProductsByPrice("HIGH_TO_LOW")}>
					high to low
				</Dropdown.Item>
			</DropdownButton>
			<div className="products">
				{props.products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
		</div>
	);
}


	 





