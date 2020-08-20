import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  handleSubmit = () => {};
  handleChange = () => {};
  state = {
    error: null,
    email: "",
    password: "",
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>
            Sign Up to
            <Link to="/">Fake-Skype</Link>
          </h1>
          <p>Fill in the form below to create an account</p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}
