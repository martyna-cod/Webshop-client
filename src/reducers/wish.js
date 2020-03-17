import { REMOVE_ITEM_FROM_WISH, EMPTY_WISH, ADD_ITEM_TO_WISH, SET_TOTAL } from '../actions/wish';

const initialState = {
	wish: [],
	total: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_TO_WISH:
			return {
				wish: [
					...state.wish,
					{
						productId: action.payload.productId,
						name: action.payload.name,
						price: parseFloat(action.payload.price)
					}
				],
				total: state.total + parseFloat(action.payload.price * 1)
			};
		case SET_TOTAL:
			return {
				...state,
				total: state.wish.reduce((sum, wishProduct) => sum + wishProduct.price, 0)
			};
		case EMPTY_WISH:
			return {
				...state,
				wish: [],
				total: 0
			};

		case REMOVE_ITEM_FROM_WISH:
			return {
				...state,
				wish: state.wish.filter((product) => product.productId !== action.payload.productId),
				total: state.total - parseFloat(action.payload.price)
			};

		default:
			return state;
	}
};
