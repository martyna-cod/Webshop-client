import React from 'react'
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { IoIosHeart } from 'react-icons/io';
import { IoMdCart } from 'react-icons/io'

export default function NavBar() {
    return (
        <div>
            			<Navbar bg="light" variant="light">
					<Navbar.Brand href="#home">Webhop</Navbar.Brand>
					<Nav className="mr-auto">
						<LinkContainer style={{ padding: '5px' }} to="/products">
							<Nav active>Our products</Nav>
						</LinkContainer>
						<LinkContainer style={{ padding: '5px' }} to="/products">
							<Nav className="links" active>
								Contact
							</Nav>
						</LinkContainer>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-primary">Search</Button>
					</Form>
          <LinkContainer style={{ padding: '5px' }} to="/wish-list">
							<Nav className="links" active>
              <IoIosHeart />
							</Nav>
						</LinkContainer>
            <LinkContainer style={{ padding: '5px' }} to="/shopping-cart">
							<Nav className="links" active>
              <LinkContainer style={{ padding: '5px' }} to="/wish-list">
							<Nav className="links" active>
              <IoMdCart />
							</Nav>
						</LinkContainer>
							</Nav>
						</LinkContainer>
				</Navbar>
        </div>
    )
}
