import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IoIosHeart } from 'react-icons/io';
import { IoMdCart } from 'react-icons/io';
import { IoIosHome } from 'react-icons/io';
import { IoIosPerson } from 'react-icons/io';
import { connect } from 'react-redux';
import { getProductsByCategory } from '../../actions/products';

function NavBar(props) {
	return (
		<div>
			<Nav className="sticky-nav justify-content-center " activeKey="/home">
				<div className="navbar-links">
					<div className="home-icon">
						<LinkContainer to="/">
							<Nav className="icon" active>
								<IoIosHome style={{ fontSize: '30px' }} />
							</Nav>
						</LinkContainer>
					</div>

					<LinkContainer to="/products">
						<Nav className="all-product-link" active>
							All products
						</Nav>
					</LinkContainer>
					<Dropdown>
						<Dropdown.Toggle className="btn-category">Women</Dropdown.Toggle>

						<Dropdown.Menu>
							{props.category.filter((categ) => categ.id < 4).map((category) => {
								return (
									<Dropdown.Item>
										<LinkContainer to="/products">
											<Nav
												key={category.id}
												onClick={() => props.getProductsByCategory(category.id)}
											>
												{category.name}{' '}
											</Nav>
										</LinkContainer>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown>
						<Dropdown.Toggle className="btn-category">Men</Dropdown.Toggle>
						<Dropdown.Menu>
							{props.category.filter((categ) => categ.id > 3).map((category) => {
								return (
									<Dropdown.Item>
										<LinkContainer to="/products">
											<Nav
												key={category.id}
												onClick={() => props.getProductsByCategory(category.id)}
											>
												{category.name}{' '}
											</Nav>
										</LinkContainer>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="icons">
					<LinkContainer className="icon" to="/wish-list">
						<Nav active>
							<IoIosHeart style={{ fontSize: '30px' }}> </IoIosHeart>
						</Nav>
					</LinkContainer>
					<LinkContainer to="/shopping-cart">
						<Nav className="icon" active>
							<IoMdCart style={{ fontSize: '30px' }} />
						</Nav>
					</LinkContainer>
					<LinkContainer to="/login">
						<Nav className="icon" active>
							<IoIosPerson style={{ fontSize: '30px' }}> </IoIosPerson>
						</Nav>
					</LinkContainer>
				</div>
			</Nav>
		</div>
	);
}

export default connect(null, { getProductsByCategory })(NavBar);
