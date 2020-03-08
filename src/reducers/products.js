import { ALL_PRODUCTS, PRODUCT } from '../actions/products';
import { SEARCH_PRODUCT_BY_CATEGORY, SET_PRODUCTS_BY_CATEGORY, SHOW_PRODUCTS_BY_SEARCH } from '../actions/products';

export default function(state = [], action = {}) {
	switch (action.type) {
		case ALL_PRODUCTS:
			return action.payload;
		case PRODUCT:
			return action.payload;
		case SEARCH_PRODUCT_BY_CATEGORY:
			console.log('ss');
			return state;
		case SET_PRODUCTS_BY_CATEGORY:
			return action.product;
		case SHOW_PRODUCTS_BY_SEARCH: 
			return {
                ...state,
              /*   visibilityFilter: 'SHOW_PRODUCTS_BY_SEARCH', */
                searchText: action.payload
            }
		default:
			return state;
	}
}
