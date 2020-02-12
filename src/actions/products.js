import request from "superagent";
import { baseUrl } from '../constants'
export const ALL_PRODUCTS = "ALL_PRODUCTS"
export const PRODUCT ="PRODUCT"
export const SEARCH_BY_CATEGORY = 'SEARCH_BY_CATEGORY';
  

function allProducts (payload) {
  return {
    type: ALL_PRODUCTS,
    payload
  }
}

export const getProducts = () => (dispatch, getState) => {
  const state = getState()
  const { products } = state

  if (!products.length) {
    request(`${baseUrl}/product`)
      .then(response => {
        const action = allProducts(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

export function product (payload) {
  console.log("Pdocut excat")
  return {
    type: PRODUCT,
    payload
  }
}

  export const getProduct = productId => (dispatch) => { 
      console.log("action get product")
    request
    .get(`${baseUrl}/product/${productId}`) 
     .then(res => {
       const action = product(res.body)
       console.log(res.body, "RESPPONSE BODY ACTIOOOOOOOOOOOOON")
       dispatch(action)
     })
     .catch(console.error)  
}
export function clickCategory(id) {
  return {
      type: SEARCH_BY_CATEGORY,
      payload: id
  };
}