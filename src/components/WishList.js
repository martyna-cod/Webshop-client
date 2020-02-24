import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromWish, emptyWish } from '../actions/wish';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



function WishList(props) {
	return (
		<div className="shopping-cart">
			<h1>Your Wish list</h1>{' '}
			{props.wish.length < 1 && (
				<Alert variant="info">
					Your wish list is empty <br />
					<Link to="/">Go back to our store</Link>
				</Alert>
			)}
			{props.wish.length > 0 && (
				<div>
					<Table hover>
						<tbody>
							{props.wish.map((product) => {
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
													props.removeItemFromWish(product);
												
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
					<Button variant="danger" onClick={() => props.emptyWish()}>
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

export default connect(null, { removeItemFromWish, emptyWish })(WishList);
