import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Signup/Signup.css";
import {
  signup,
  signInWithGoogle,
  signInWithFacebook,
} from "../../helpers/auth";
export default class SignUp extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  handleFbSignIn = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };
  state = {
    error: null,
    email: "",
    password: "",
  };
  render() {
    return (
      <div className="container-signup">
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <h6>Fill in the form below to create an account</h6>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
          </div>
          {this.state.error ? (
            <p style={{ color: "red" }}>{this.state.error}</p>
          ) : null}
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
          <p>You can also sign up with any of these services</p>
          <button className="btn btn-danger" onClick={this.handleGoogleSignIn}>
            Sign up with Google
          </button>
          <button className="btn btn-info" onClick={this.handleFbSignIn}>
            Sign up with Facebook
          </button>
        </form>
        <hr></hr>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}
