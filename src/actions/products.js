import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_PRODUCTS = "ALL_PRODUCTS"
export const NEW_PRODUCT = "NEW_PRODUCT"


function newProduct (payload) {
  return {
    type: NEW_PRODUCT,
    payload
  }
}

export const createProduct = data => (dispatch, getState) => {
  const state = getState()
  request
    .post(`${baseUrl}/products`)
    .send(data)
    .then(response => {
      const action = newProduct(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

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
    request(`${baseUrl}/products`)
      .then(response => {
        const action = allProducts(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}