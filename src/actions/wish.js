export const ADD_ITEM_TO_WISH = "ADD_ITEM_WISH";
export const EMPTY_WISH = "EMPTY_WISH";
export const REMOVE_ITEM_FROM_WISH = "REMOVE_ITEM_FROM_WISH_LIST"

export function addItemToWish(product) {
  return {
    type: ADD_ITEM_TO_WISH,
    payload: {
		id : product.id,
		name : product.name,
		price: product.price
	
    }
  };
}

export function removeItemFromWish(product) {
	return {
		type: REMOVE_ITEM_FROM_WISH,
		payload: product
	};
  }
  