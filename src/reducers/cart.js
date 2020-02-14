import { ADD_ITEM_CART } from "../actions/cart";
import { REMOVE_ITEM_FROM_CART } from "../actions/cart";
import { EMPTY_CART } from "../actions/cart";
const initialState = {
	cart: [],
	total: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      return{
				...state,
				cart: [
					...state.cart,
					{
						productId: action.payload.productId,
						price: parseFloat(action.payload.price)
					}]}
    case EMPTY_CART:
      return (state = []);
    case REMOVE_ITEM_FROM_CART:
        console.log(state.cart, "CAAAAAAAAAAAAAAAAART")
      return {
				...state,
				cart: state.cart.filter(
          (product => product.productId !== action.payload.productId))}
      
          case "SET_TOTAL":
            return {
              ...state,
              total: state.cart.reduce((sum, cartItem) => sum + cartItem.price, 0)
            };
      
          default:
            return state;
        }
      };