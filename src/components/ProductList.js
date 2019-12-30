import React from 'react';
import { Link } from 'react-router-dom';
//import { Jumbotron} from "react-bootstrap"

export default function ProductList(props) {
	return (
		<div>
			<div>
				<h2>Products</h2>
			</div>
			<div>
				{props.products.map((product) => (
					<div className="product">
						<div key={product.id}>
							{product.name}
							<img alt={product.name} src={product.image} /> <br /> <br />
							<h5>{product.description}</h5>
							<br /> <br />
							<Link to={`/product/${product.id}`}>See detailes</Link> <br /> <br />
						</div>{' '}
					</div>
				))}
			</div>
		</div>
	);
}
