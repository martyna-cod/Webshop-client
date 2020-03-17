import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUp } from '../../actions/user'


class SignUpFormContainer extends Component {
  state = { email: "", password: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.signUp({
      email: this.state.email,
      password: this.state.password,
      history: this.props.history.push("/login") 
    });
  };

  render() {
    return (
      <div>
         <SignUpForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { signUp })(SignUpFormContainer);