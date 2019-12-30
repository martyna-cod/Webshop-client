import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_PRODUCTS = "ALL_PRODUCTS"
  

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