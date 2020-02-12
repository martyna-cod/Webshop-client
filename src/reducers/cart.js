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
        console.log(state)
      return {...state, 
        cart: state.filter(product => product.id !== action.payload.id)}
      
    default:
      return state;
  }
};