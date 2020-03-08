import React from 'react';
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";

export default function ProductList(props) {
	return (
		<div>
			<Link style={{color: "black"}} to="/">Back to our awesome store!</Link>
			<div className="products">
				{props.products.map((product) => <ProductCard key={product.id} product={product} />)}
			</div>
		</div>
	);
}
