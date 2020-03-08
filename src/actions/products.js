import request from "superagent";
import { baseUrl } from '../constants'
export const ALL_PRODUCTS = "ALL_PRODUCTS"
export const PRODUCT ="PRODUCT"
export const SEARCH_PRODUCT_BY_CATEGORY ="SEARCH_PRODUCT_BY_CATEGORY"
export const SET_PRODUCTS_BY_CATEGORY ="SET_PRODUCTS_BY_CATEGORY"
export const SHOW_PRODUCTS_BY_SEARCH ="SHOW_PRODUCTS_BY_SEARCH," 

function allProducts (payload) {
  return {
    type: ALL_PRODUCTS,
    payload
  }
}
function setProductsByCategory (product) {
  console.log("setting products")
  return {
    type: SET_PRODUCTS_BY_CATEGORY,
    product
}}

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
  console.log(product, "product")
  return {
    type: PRODUCT,
    payload
  }
}

export const getProduct = productId => (dispatch) => { 
    
  request
  .get(`${baseUrl}/product/${productId}`) 
   .then(res => {
     const action = product(res.body)
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
  console.log("ACTION GETTTT PRODCUTS", categoryId)
  const state = getState()
  const { products } = state

 /*   if (!products.length) {  */
    request(`${baseUrl}/product/category/${categoryId}`)
      .then(response => {
        console.log(response.body, "products action response")
        const action = setProductsByCategory(response.body)

        dispatch(action)
      })
      .catch(console.error)
  
}

export function searchProducts(searchText) {
  console.log("search")
  return {
      type: SHOW_PRODUCTS_BY_SEARCH,
      payload: searchText
  };
}