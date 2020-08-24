import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { signup } from "../../helpers/auth";
import '../../index.css'

export default class SignUp extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ error: null });
>>>>>>> e27dcb219e6bb1be24dfc4ac6757f1576465d32f
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
<<<<<<< HEAD

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
=======
>>>>>>> e27dcb219e6bb1be24dfc4ac6757f1576465d32f
  state = {
    error: null,
    email: "",
    username: "",
    password: "",
  };
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="text-center mb-4">
                <h4>Sign up</h4>
                <p className="text-muted mb-4">Get your Chat via account now</p>
              </div>
              <div className="card">
                <div className="card-body p-4">
                  <div className="p-3">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
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
                        <label htmlFor="username">Username</label>
                        <input
                          className="form-control"
                          placeholder="Username"
                          name="username"
                          type="text"
                          onChange={this.handleChange}
                          value={this.state.username}
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>
                        <input
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          type="password"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </div>
                      {this.state.error ? (
                        <p style={{ color: "red" }}>{this.state.error}</p>
                      ) : null}
                      <button
                        className="btn btn-primary btn-block waves-effect waves-light"
                        type="submit"
                      >
                        Sign up
                      </button>
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>Already have an account? <Link to='/login'>Signin</Link></p>
              </div>
            </div>
          </div>
        </div>
>>>>>>> e27dcb219e6bb1be24dfc4ac6757f1576465d32f
      </div>
    );
  }
}
