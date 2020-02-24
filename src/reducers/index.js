import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import cart from './cart';
import wish from './wish';
import category from './category';

export default combineReducers({
	user,
	products,
	cart,
	wish,
	category
});
