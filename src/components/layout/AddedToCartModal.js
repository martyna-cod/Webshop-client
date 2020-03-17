import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


export default function addedToCartModal(props) {
return (
  <Modal
  {...props}
  size="sm"

>
  <Modal.Header closeButton>
  
  </Modal.Header>
  <Modal.Body>
    <h6>Item added to the cart</h6>
  </Modal.Body>
  <Modal.Footer>
    <LinkContainer className="modal-btn-a" to="/shopping-cart">
    <Button className="modal-btn" onClick={props.onHide}>Go to the cart</Button>
    </LinkContainer>

    <Button className="modal-btn" onClick={props.onHide}>Continue shopping</Button>
  
  </Modal.Footer>
</Modal>
);
}