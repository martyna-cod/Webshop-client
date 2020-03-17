import { ALL_PRODUCTS, PRODUCT, SEARCH_PRODUCT_BY_CATEGORY, SET_PRODUCTS_BY_CATEGORY } from '../actions/products'



export default function(state = [], action = {}) {
	switch (action.type) {
		case ALL_PRODUCTS:
			return action.payload;
		case PRODUCT:
			return action.payload;
		case SEARCH_PRODUCT_BY_CATEGORY:
			return state;
		case SET_PRODUCTS_BY_CATEGORY:
			return action.product;

		default:
			return state;
	}
}
