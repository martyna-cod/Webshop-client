export const ADD_ITEM_TO_WISH = 'ADD_ITEM_WISH';
export const EMPTY_WISH = 'EMPTY_WISH';
export const REMOVE_ITEM_FROM_WISH = 'REMOVE_ITEM_FROM_WISH_LIST';
export const SET_TOTAL = 'SET_TOTAL';

export function addItemToWish(product) {
	return {
		type: ADD_ITEM_TO_WISH,
		payload: {
			productId: product.id,
			name: product.name,
			price: product.price
		}
	};
}

export function removeItemFromWish(product) {
	return {
		type: REMOVE_ITEM_FROM_WISH,
		payload: {
			productId: product.productId,
			name: product.name,
			price: product.price
		}
	};
}

export function emptyWish() {
	return {
		type: EMPTY_WISH
	};
}

export function setTotal() {
	return {
		type: SET_TOTAL
	};
}
