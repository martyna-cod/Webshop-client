export const ADD_ITEM_TO_WISH = "ADD_ITEM_WISH";
export const EMPTY_WISH = "EMPTY_WISH";
export const REMOVE_ITEM_FROM_WISH = "REMOVE_ITEM_FROM_WISH_LIST"

export function addItemToWish(id, name, image, description, price) {
  return {
    type: ADD_ITEM_TO_WISH,
    payload: {
      id: id,
      name: name,
      description: description,
      image: image,
      price: price
    }
  };
}

export function removeItemFromWish(id) {
	return {
		type: REMOVE_ITEM_FROM_WISH,
		payload: {
			id: id,
		}
	};
}
