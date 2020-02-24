import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emptyCart, removeItemFromCart, setTotal } from '../actions/cart';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



function ShoppingCart(props) {
	return (
		<div className="shopping-cart">
			<h1>Your Shopping Cart</h1>{' '}
			{props.cart.length < 1 && (
				<Alert variant="info">
					Your cart is empty. How about you go back to the products and start buying? <br />
					<Link to="/">Go back to our awesome store</Link>
				</Alert>
			)}
			{props.cart.length > 0 && (
				<div>
					<Table hover>
						<tbody>
							{props.cart.map((product) => {
								return (
									<tr key={product.id}>
										<td>
											<img style={{width: "250px"}}className="product-img" alt={product.name} src={product.image} />
										</td>
										<td>{product.id}</td>
										<td>{product.name}</td> <br/>	
										<td>{product.description}</td>

									
										<td>
											<Button
												variant="danger"
												onClick={() => {
													props.removeItemFromCart(product);
													props.setTotal();	
												
												}}
											>
												X
											</Button>
										</td>
										<td>{product.price}€</td>
									</tr>
								);
							})}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="5">Total:</td>
								<td>({props.total})€</td>
							</tr>
						</tfoot>
					</Table>
					<Button variant="danger" onClick={() => props.emptyCart()}>
						Clear whole cart
					</Button>{' '}
					<br />
					<br />
							
					<Link to="/">Back to our awesome store!</Link>
				</div>
			)}
		</div>
	);
}

export default connect(null, { removeItemFromCart, emptyCart, setTotal })(ShoppingCart);
