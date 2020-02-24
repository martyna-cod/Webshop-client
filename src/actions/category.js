import request from 'superagent';
import { baseUrl } from '../constants';
export const ALL_CATEGORIES = 'ALL_CATEGORIES';

function allCategories(payload) {
	return {
		type: ALL_CATEGORIES,
		payload
	};
}


export const getCategories = () => (dispatch, getState) => {
	console.log("ACTIOOON GETCATEGOOOORIES")

	const state = getState()
	const { category } = state
  
	if (!category.length) {
	  request(`${baseUrl}/category`)
		.then(response => {
				console.log("response-category-action", response)
		  const action = allCategories(response.body)
  
		  dispatch(action)
		})
		.catch(console.error)
	}
  }