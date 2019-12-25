import { ALL_PRODUCTS } from '../actions/products';

export default function(state = [], action = {}) {
    switch (action.type) {
        case ALL_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}