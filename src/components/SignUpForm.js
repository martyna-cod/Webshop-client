import React from "react";

export default function SignUpForm(props) {
    console.log(props, "props login formCOOOONTAINEr")
  return (
    <form onSubmit={props.onSubmit}>
      <label>user name:</label> 
      <input
        type="text"
        name="email"
        placeholder="email"
        value={props.values.email}
        onChange={props.onChange}
      />
      <label>password:</label>
      <input
        type="text"
        name="password"
        placeholder="password"
        value={props.values.password}
        onChange={props.onChange}
      />
      <button type="Submit">sign up</button>
    </form>
  );
}