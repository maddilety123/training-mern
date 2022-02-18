import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class App extends Component {
  onInputChange = (event) => {
    const name = event.target.name;
    switch (name) {
      case "email":
        this.props.onEmailChange(event.target.value);
        break;
      case "password":
        this.props.onPasswordChange(event.target.value);
        break;
      default:
    }
  };

  render() {
    return (
      <div className="app-container">
        <form className="app-card ">
          <label>Email</label>
          <br />
          <input
            className="form-control"
            value={this.props.email}
            type="email"
            name="email"
            onChange={this.onInputChange}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={this.props.password}
            name="password"
            className="form-control"
            type="password"
            onChange={this.onInputChange}
          />
          <br />
          <Link to="/dashboard">
            <button className="btn btn-primary m-2" onClick={this.onAdd}>
              Add
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (email) =>
      dispatch({ type: "email/change", payload: email }),
    onPasswordChange: (password) =>
      dispatch({ type: "password/change", payload: password }),
  };
};

const ConnectComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectComponent;
