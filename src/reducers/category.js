import { ALL_CATEGORIES } from '../actions/category';

export default function(state = [], action = {}) {
	switch (action.type) {
		case ALL_CATEGORIES:
			return action.payload;
    	default:
			return state;
	}
}
