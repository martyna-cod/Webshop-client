export const ADD_ITEM_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const SET_TOTAL = 'SET_TOTAL';

export function addItemToCart(product) {
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
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: {
			productId: product.productId,
			name: product.name,
			price: product.price
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
