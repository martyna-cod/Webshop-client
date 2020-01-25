import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductList(props) {
	return (
		<div>
			<div>
				<h1>Products</h1>
				<DropdownButton variant="light" id="dropdown-basic-button" title="Sort products by price: ">
					<Dropdown.Item onClick={() => props.sortProductsByPrice('LOW_TO_HIGH')}>low to high</Dropdown.Item>
					<Dropdown.Item onClick={() => props.sortProductsByPrice('HIGH_TO_LOW')}>high to low</Dropdown.Item>
				</DropdownButton>
				<div className="products">
					{props.products.map((product) => <ProductCard key={product.id} product={product} />)}
				</div>
			</div>
		</div>
	);
}
