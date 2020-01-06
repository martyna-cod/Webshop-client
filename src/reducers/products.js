import { ALL_PRODUCTS, PRODUCT } from '../actions/products';

export default function(state = [], action = {}) {
    switch (action.type) {
        case ALL_PRODUCTS:
            return action.payload;
            case PRODUCT:
                console.log(action.payload, "ACIOTN FOR PRODUCT")
                return action.payload;
        default:
            return state;
    }
}