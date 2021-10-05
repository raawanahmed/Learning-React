import React from "react";
import Form from "./common/form";
// import { Joi } from 'joi-browser';
const Joi = require("joi-browser");

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call server
    console.log("Logged In");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", 'password')}
          {this.renderButton("login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
