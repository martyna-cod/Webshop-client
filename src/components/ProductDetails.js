import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
	console.log(props, 'props');
	return (
		<div>
			<Link to="/"> GO BACK TO THE SHOP </Link>

			<div>
				<h1>Product Details</h1>
                <h2>{props.product.name}</h2>
				<h2>{props.product.price} </h2>
				<p>{props.product.description}</p>
			</div>
		</div>
	);
}
