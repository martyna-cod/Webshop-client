import { ADD_ITEM_TO_WISH } from "../actions/wish";
import { REMOVE_ITEM_FROM_WISH, EMPTY_WISH } from "../actions/wish";

const initialState = {
	wish: [],
	total: 0
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISH:
        return [...state, action.payload]
        case EMPTY_WISH:
            return  {
              ...state,
              wish: [],
              total: 0
            };
            
      case REMOVE_ITEM_FROM_WISH:
          return {
            ...state,
            wish: state.filter(
              (product => product.productId === action.payload.productId))}
                    default:
                return state;
            }
          };