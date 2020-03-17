import { ADD_ITEM_CART, REMOVE_ITEM_FROM_CART, EMPTY_CART, SET_TOTAL } from '../actions/cart';

const initialState = {
	cart: [],
	total: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_CART:
			return {
				cart: [
					...state.cart,
					{
						productId: action.payload.productId,
						name: action.payload.name,
						price: parseFloat(action.payload.price)
					}
				],
				total: state.total + parseFloat(action.payload.price * 1)
			};
		case EMPTY_CART:
			return {
				...state,
				cart: [],
				total: 0
			};

		case SET_TOTAL:
			return {
				...state,
				total: state.cart.reduce((sum, cartProduct) => sum + cartProduct.price, 0)
			};

		case REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((product) => product.productId !== action.payload.productId),
				total: state.total - parseFloat(action.payload.price)
			};
		default:
			return state;
	}
};
