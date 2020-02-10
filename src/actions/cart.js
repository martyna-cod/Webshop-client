export const ADD_ITEM_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";
export const SET_TOTAL = "SET_TOTAL";
export const SET_QTY = "SET_QTY"

export function addItemToCart(id, name, image, description, price) {
  return {
    type: ADD_ITEM_CART,
    payload: {
      id: id,
      name: name,
      description: description,
      image: image,
      price: price
    }
  };
}

export function removeItemFromCart(id) {
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: {
			id: id,
		}
	};
}


export function emptyCart() {
	return {
		type: EMPTY_CART
	};
}

export function setTotal() {
	return {
		type: SET_TOTAL
	};
}

export function setQty(id, qty, price) {
	return {
		type: SET_QTY,
		payload: {
			productId: id,
			quantity: qty,
			price: price
		}
	};
}


