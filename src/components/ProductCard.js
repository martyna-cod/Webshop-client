import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { addItemToCart } from "../actions/cart";
import { addItemToWish } from "../actions/wish"
import { connect } from "react-redux";

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
				</Button> <br/>
                <Button
					variant="primary"
					block
					onClick={() => props.addItemToWish(product)}
				>
					Add to wishlist
				</Button>


<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


			</Card.Body>
		</Card>
	);
}


export default connect(
null,
	{ addItemToCart, addItemToWish }
)(ProductCard); 