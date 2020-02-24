import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList(props) {
	return (
		<div>
			<div className="products">
				{props.products.map((product) => <ProductCard key={product.id} product={product} />)}
			</div>
		</div>
	);
}
