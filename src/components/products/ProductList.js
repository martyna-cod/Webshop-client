import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { FormControl, Form } from 'react-bootstrap';

export default function ProductList(props) {
	let filteredProducts = props.products.filter((product) => {
		console.log(props.value.search, 'props.value');
		return product.name.toLowerCase().includes(props.value.search) || product.description.toLowerCase().includes(props.value.search);
	});
	return (
		<div className="product-list-page">
			<Form className="search-bar" inline>
				<FormControl
					type="text"
					placeholder="Search by brand"
					name="search"
					value={props.values}
					onChange={props.onChange}
					className="form-control mr-sm-1"
					onKeyUp={props.onKeyUp}
				/>
			</Form>

			<a href ="/products">
				Back to our store!
			</a>
			<div className="products">
				{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
			</div>
		</div>
	);
}
