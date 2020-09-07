import React, { Component } from "react";
import { signin } from "../../helpers/auth";
import { Link } from "react-router-dom";
import "./LoginStyl.css";

class Login extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  state = {
    error: null,
    email: "",
    password: "",
  };
  render() {
    return (
      <div className="container-signin">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>

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
          {this.state.error ? <p>{this.state.error}</p> : null}
          <button className="btn btn-primary" type="submit">
            Log in
          </button>
        </form>
        <hr></hr>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    );
  }
}
export default Login;
