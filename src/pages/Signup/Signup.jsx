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
      <div className="sign-up">
        <form onSubmit={this.handleSubmit}>
          <h1>
            Sign Up to
            <Link to="/"> Fake-Skype</Link>
          </h1>
          <p>Fill in the form below to create an account</p>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          {this.state.error ? <p>{this.state.error}</p> : null}
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
