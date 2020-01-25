const initialState = { category: [], loading: "true" };

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_CATEGORY":
			return {
				...state,
				category: action.payload,
				loading: false
			};
		default:
			return state;
	}
};