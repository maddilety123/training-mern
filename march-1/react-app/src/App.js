import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  state = { username: "", password: "" };

  onInputChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value,
    });
  };

  onRequestLogin = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:4000/userlogin?username=${this.state.username}&password=${this.state.password}`
      )
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        alert(response.data);
      })
      .catch((error) => {
        alert("Login failed,Try again");
      });
  };

  render() {
    return (
      <div className="app-container">
        <h1>Login Form</h1>
        <form onSubmit={this.onRequestLogin}>
          <label>Enter UserName</label>
          <br />
          <input
            type="text"
            placeholder="Enter Username"
            className="form-control"
            name="username"
            onChange={this.onInputChange}
            value={this.state.username}
          />
          <br />
          <label>Enter Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
            onChange={this.onInputChange}
            value={this.state.password}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
