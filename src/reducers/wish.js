import { ADD_ITEM_TO_WISH } from "../actions/wish";
import { REMOVE_ITEM_FROM_WISH } from "../actions/wish";
import { EMPTY_WISH } from "../actions/wish";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISH:
      return [...state, action.payload];
    case EMPTY_WISH:
      return (state = []);
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlist: state.wishlist.filter(wish => wish.id !== action.payload.id)
        };
    default:
      return state;
  }
};