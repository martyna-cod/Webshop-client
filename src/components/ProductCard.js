import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { addItemToCart } from "../actions/cart";
import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";

function ProductCard(props) {
    console.log("propsy", props)
	const product = props.product;

	return (
		<Card className="product-card" style={{ width: "200px" }}>
			<div className="image">
				<Card.Img variant="top" src={product.image} />
			</div>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>
					{product.description}
						<br />
					Price: {product.price}€
				</Card.Text>
				<Button
					variant="primary"
					block
					onClick={() => props.addItemToCart(product)}
				>
					Add to cart
				</Button>
			
			</Card.Body>
		</Card>
	);
}


export default connect(
null,
	{ addItemToCart }
)(ProductCard);