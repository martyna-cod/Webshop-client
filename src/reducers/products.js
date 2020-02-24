import { ALL_PRODUCTS, PRODUCT } from '../actions/products';
import { SEARCH_PRODUCT_BY_CATEGORY } from '../actions/products';

export default function(state = [], action = {}) {
	switch (action.type) {
		case ALL_PRODUCTS:
			return action.payload;
		case PRODUCT:
			return action.payload;
		case SEARCH_PRODUCT_BY_CATEGORY:
			console.log('ss');
			return state.filter((product) => product.categoryId === action.payload)
            
		default:
			return state;
	}
}
