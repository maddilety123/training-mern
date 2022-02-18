import "./App.css";
import { connect } from "react-redux";
import { Component } from "react";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  onGetEmail = () => {
    this.props.getEmail();
  };

  onGetContact = () => {
    this.props.getContact();
  };

  onGetAddress = () => {
    this.props.getAddress();
  };

  render() {
    return (
      <div className="App">
        <div className="cards">
          <button onClick={this.onGetEmail}>GetEmail</button>
          <p>{this.props.email}</p>
        </div>
        <div className="cards">
          <button onClick={this.onGetAddress}>GetAddress</button>
          <p>{this.props.address}</p>
        </div>
        <div className="cards">
          <button onClick={this.onGetContact}>GetContact</button>
          <p>{this.props.contact}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email.email,
    address: state.address.address,
    contact: state.contact.contact,
  };
};

const getEmail = (email) => ({ type: "email", payload: email });
const getAddress = (address) => ({ type: "address", payload: address });
const getContact = (contact) => ({ type: "contact", payload: contact });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEmail, getAddress, getContact }, dispatch);
};

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectApp;
