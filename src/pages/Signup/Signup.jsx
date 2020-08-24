import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  signup,
  signInWithGoogle,
  signInWithFacebook,
} from "../../helpers/auth";
export default class SignUp extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ error: null });
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
    username: "",
    password: "",
  };
  render() {
    return (
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
                      <p>You can also sign up with any of these services</p>
                      <button
                        className="btn btn-danger"
                        onClick={this.handleGoogleSignIn}
                      >
                        Sign up with Google
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={this.handleFbSignIn}
                      >
                        Sign up with Facebook
                      </button>
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  Already have an account? <Link to="/login">Signin</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
