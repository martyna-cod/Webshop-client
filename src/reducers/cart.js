import { ADD_ITEM_CART } from "../actions/cart";
import { REMOVE_ITEM_FROM_CART } from "../actions/cart";
import { EMPTY_CART } from "../actions/cart";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      return [...state, action.payload];
    case EMPTY_CART:
      return (state = []);
    case REMOVE_ITEM_FROM_CART:
      return {...state, 
        cart: state.filter(item => item.id !== action.payload.id)}
    default:
      return state;
  }
};