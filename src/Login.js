import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: "",
        role: "",
      },
    };
  }

  handleChange = (e) => {
    console.log(this.props);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    console.log(this.state.credentials);
    axios
      .post("http://localhost:9000/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/friends");
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <>
        <h1>LOGIN</h1>
        <form onClick={this.login} className="login-form">
          <div className="username-container">
            <label htmlFor="username">USERNAME</label>&nbsp;
            <input
              name="username"
              type="text"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
          </div>
          <br />
          <div className="password-container">
            <label htmlFor="password">PASSWORD</label>&nbsp;
            <input
              name="password"
              type="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="password"
            />
          </div>
          <br />
          <button>LOGIN</button>
        </form>
      </>
    );
  }
}

export default Login;
