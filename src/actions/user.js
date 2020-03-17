import request from 'superagent';
import { baseUrl } from '../constants';

export const JWT = 'JWT';

function jwt(payload) {
	return {
		type: JWT,
		payload
	};
}

export const login = (email, password) => (dispatch) => {
	request
		.post(`${baseUrl}/login`)
		.set(`Authorization, Bearer ${jwt}`)
		.send({ email, password })
		.then((res) => {
			const action = jwt(res.body.jwt);
			dispatch(action);
		})
		.catch(console.error);
};

export const signUp = (data) => (dispatch, getState) => {
	request
		.post(`${baseUrl}/user`)
		.send(data)
		.then((res) => {
			console.log(res.body);
		})
		.catch(console.error);
};
