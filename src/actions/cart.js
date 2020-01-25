export const ADD_ITEM_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";

export function addItemToCart(id, name, image, description, price) {
  return {
    type: ADD_ITEM_CART,
    payload: {
      id: id,
      name: name,
      description: description,
      image: image,
      price: price
    }
  };
}

export function removeItemFromCart(id) {
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: {
			id: id,
		}
	};
}




