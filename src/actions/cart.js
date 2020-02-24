export const ADD_ITEM_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";
export const SET_TOTAL = "SET_TOTAL";


export function addItemToCart(product) {
	console.log("Product adding to the cart", product )
  return {
    type: ADD_ITEM_CART,
    payload: {
		productId: product.id,
		name: product.name,
		price: product.price
	
    }
  };
}

export function removeItemFromCart(product) {
	console.log("produuuuuuuuuuuct", product.id)
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: {
			productId: product.id,
			name: product.name,
			price: product.price

		}
	};
}


export function emptyCart() {
	console.log("empty cart action")
	return {
		type: EMPTY_CART
	};
}

export function setTotal() {
	console.log("set total action")
	return {
		type: SET_TOTAL
	};
}



