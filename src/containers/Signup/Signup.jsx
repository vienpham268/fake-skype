import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  signup,
  signInWithGoogleAccount,
  signInWithFacebookAccount,
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
      await signInWithGoogleAccount();
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  handleFbSignIn = async () => {
    try {
      await signInWithFacebookAccount();
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
                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                          <div className="input-group-prepend">
                            <span className="input-group-text border-light text-muted">
                              <i class="fa fa-envelope fa-xs" />
                            </span>
                          </div>
                          <input
                            className="form-control bg-soft-light border-light"
                            placeholder="Enter Email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                          <div className="input-group-prepend">
                            <span className="input-group-text border-light text-muted">
                              <i class="fa fa-user fa-lg"></i>
                            </span>
                          </div>
                          <input
                            className="form-control bg-soft-light border-light"
                            placeholder="Enter Username"
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.username}
                          />
                        </div>
                      </div>

                      <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>
                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                          <div className="input-group-prepend">
                            <span className="input-group-text border-light text-muted">
                              <i class="fa fa-unlock-alt fa-lg"></i>
                            </span>
                          </div>
                          <input
                            className="form-control bg-soft-light border-light"
                            placeholder="Enter Password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                          />
                        </div>
                      </div>
                      {this.state.error ? (
                        <p style={{ color: "red" }}>{this.state.error}</p>
                      ) : null}
                      <button
                        className="btn btn-primary btn-block waves-effect waves-light mb-3"
                        type="submit"
                      >
                        Sign up
                      </button>
                      {/* <p>You can also sign up with any of these services</p>
                      <div className="btn-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text  text-muted">
                          <i class="fa fa-google"></i>
                          </span>
                        </div>
                        <button
                          className="btn btn-danger btn-block waves-effect waves-light "
                          onClick={this.handleGoogleSignIn}
                        >
                          Sign up with Google
                        </button>
                      </div> */}

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
            {/* <div className="img-container img-fluid ">
              <img src="/assets/signup-background.jpg" alt="image" />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
