import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { addItemToCart } from '../../actions/cart';
import { addItemToWish } from '../../actions/wish';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AddedToCartModal from '../layout/AddedToCartModal';

function ProductCard(props) {
	const product = props.product;
	const [modalShow, setModalShow] = React.useState(false);


	return (
		<Card className="product-card" style={{ width: '200px' }}>
			<div className="image">
				<Card.Img variant="top" src={product.image} />
			</div>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>
					{product.description}
					<br />
					Price: {product.price}€
					<Link to={`/product/${product.id}`}> See detailes </Link> <br />
				</Card.Text>
				<Button variant="primary" block onClick={() =>
				 {props.addItemToCart(product)
				setModalShow(true)}}>
					Add to cart
				</Button>{' '}
		
  
				<AddedToCartModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
				<br />
				<Button variant="primary" block onClick={() => {props.addItemToWish(product)
				setModalShow(true)}}>
					Add to wishlist
				</Button>
			</Card.Body>
		</Card>
	);
}

export default connect(null, { addItemToCart, addItemToWish })(ProductCard);
