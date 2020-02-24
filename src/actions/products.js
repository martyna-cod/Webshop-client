import request from "superagent";
import { baseUrl } from '../constants'
export const ALL_PRODUCTS = "ALL_PRODUCTS"
export const PRODUCT ="PRODUCT"
export const SEARCH_PRODUCT_BY_CATEGORY ="SEARCH_PRODUCT_BY_CATEGORY"
export const SET_PRODUCTS_BY_CATEGORY ="SET_PRODUCTS_BY_CATEGORY"

  
function allProducts (payload) {
  return {
    type: ALL_PRODUCTS,
    payload
  }
}
function setProductsByCategory (payload) {
  return {
    type: SET_PRODUCTS_BY_CATEGORY,
    payload
  }
}

export const getProducts = () => (dispatch, getState) => {
  console.log("ACTION GETTTT PRODCUTS")
  const state = getState()
  const { products } = state

  if (!products.length) {
    request(`${baseUrl}/product`)
      .then(response => {
        console.log(response.body, "products action response")
        const action = allProducts(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

export function product (payload) {
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



export function pickCategory(id) {
  console.log(id, "action pickCategory ID")
  return {
      type: SEARCH_PRODUCT_BY_CATEGORY,
      payload: id
  };
}

export const getProductsByCategory = (categoryId) => (dispatch, getState) => {
  console.log("ACTION GETTTT PRODCUTS")
  const state = getState()
  const { products } = state

  if (!products.length) {
    request(`${baseUrl}/product/category/${categoryId}`)
      .then(response => {
        console.log(response.body, "products action response")
        const action = setProductsByCategory(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}
