import request from "superagent";
const baseUrl = "http://localhost:4060";

export const JWT = "JWT";

function jwt(payload) {
  console.log("payload", payload)
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => { 
  console.log("Login action")
  request
    .post(`${baseUrl}/login`)
    //.set(`Authorization, Bearer ${jwt}`)
    .send({ email, password })
    .then(res => {
      const action = jwt(res.body.jwt);
      dispatch(action);
    })
};

 export const signUp = data => (dispatch, getState) => { 
console.log("signUp ACTION", data)
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(res => {
      console.log(res.body);   
    })
    .catch(console.error);
};