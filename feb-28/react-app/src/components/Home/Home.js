import { Component } from "react";
import { connect } from "react-redux";

import "./index.css";
class Home extends Component {
  state = {
    step: 1,
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    height: "",
    heightError: "",
    weight: "",
    weightError: "",
    age: "select age range",
    ageError: "",
    color: "select color",
    colorError: "",
  };

  onInputChange = (e) => {
    const name = e.target.name;
    switch (name) {
      case "firstName":
        this.setState({ firstNameError: "" });
        break;
      case "lastName":
        this.setState({ lastNameError: "" });
        break;
      case "email":
        this.setState({ emailError: "" });
        break;
      case "height":
        this.setState({ heightError: "" });
        break;
      case "weight":
        this.setState({ weightError: "" });
        break;
      case "age":
        this.setState({ ageError: "" });
        break;
      case "color":
        this.setState({ colorError: "" });
        break;
      default:
        break;
    }

    this.setState({
      [name]: e.target.value,
    });
  };

  onSubmitForm1 = (e) => {
    e.preventDefault();
    if (this.state.firstName === "") {
      this.setState({ firstNameError: "Enter a Valid FirstName" });
    } else if (this.state.lastName === "") {
      this.setState({ lastNameError: "Enter a Valid LastName" });
    } else {
      this.setState({ step: 2 });
    }
  };

  onSubmitForm2 = (e) => {
    e.preventDefault();
    if (this.state.email === "") {
      this.setState({ emailError: "Enter a Valid Email" });
    } else {
      this.setState({ step: 3 });
    }
  };

  onSubmitForm3 = (e) => {
    e.preventDefault();

    if (this.state.age === "select age range") {
      this.setState({ ageError: "select a valid age" });
    } else if (this.state.height === "") {
      this.setState({ heightError: "Enter a Valid height" });
    } else if (this.state.weight === "") {
      this.setState({ weightError: "Enter a valid weight" });
    } else {
      this.setState({ step: 4 });
    }
  };

  onSubmitForm4 = (e) => {
    e.preventDefault();

    if (this.state.color === "select color") {
      this.setState({ colorError: "select a valid color" });
    } else {
      this.setState({ step: 5 });
      const userData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        age: this.state.age,
        height: this.state.height,
        weight: this.state.weight,
        color: this.state.color,
      };
      this.props.addUserToStore(userData);
    }
  };

  getForm1 = () => {
    return (
      <form onSubmit={this.onSubmitForm1}>
        <h1>Step 1</h1>
        <label>FirstName</label>
        <br />
        <input
          placeholder="Enter firstname"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.onInputChange}
        />
        <p className="error-message">{this.state.firstNameError}</p>
        <label>LaststName</label>
        <br />
        <input
          placeholder="Enter LaststName"
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.onInputChange}
        />
        <p className="error-message">{this.state.lastNameError}</p>
        <button disabled={true}>Prev</button>
        <button type="submit">Next</button>
      </form>
    );
  };

  getForm2 = () => {
    return (
      <form onSubmit={this.onSubmitForm2}>
        <h1>Step 2</h1>
        <label>Email</label>
        <br />
        <input
          placeholder="Enter email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <p className="error-message">{this.state.emailError}</p>

        <button onClick={this.onPrevBtn1}>Prev</button>
        <button type="submit">Next</button>
      </form>
    );
  };

  getForm3 = () => {
    return (
      <form onSubmit={this.onSubmitForm3}>
        <h1>Step 3</h1>

        <label>Age</label>
        <br />
        <select value={this.state.age} name="age" onChange={this.onInputChange}>
          <option value="select age range">Select Age Range</option>
          <option value="17 and under">17 and under</option>
          <option value="18-24">18-24</option>
          <option value="25-35">25-35</option>
          <option value="36-45">36-45</option>
          <option value="36 or older">36 or older</option>
        </select>
        <br />
        <p className="error-message">{this.state.ageError}</p>
        <label>Height</label>
        <br />
        <input
          placeholder="Enter height in feet"
          type="number"
          name="height"
          value={this.state.height}
          onChange={this.onInputChange}
        />
        <p className="error-message">{this.state.heightError}</p>
        <label>Weight</label>
        <br />
        <input
          placeholder="Enter Weight in KGS"
          type="number"
          name="weight"
          value={this.state.weight}
          onChange={this.onInputChange}
        />
        <p className="error-message">{this.state.weightError}</p>

        <button onClick={this.onPrevBtn2}>Prev</button>
        <button type="submit">Next</button>
      </form>
    );
  };

  getForm4 = () => {
    return (
      <form onSubmit={this.onSubmitForm4}>
        <h1>Step 4</h1>

        <label>Favourite color</label>
        <br />
        <select
          value={this.state.color}
          name="color"
          onChange={this.onInputChange}
        >
          <option value="select color">Select color</option>
          <option value="red">red</option>
          <option value="black">black</option>
          <option value="blue">blue</option>
          <option value="orange">orange</option>
        </select>
        <br />
        <p className="error-message">{this.state.colorError}</p>

        <button onClick={this.onPrevBtn3}>Prev</button>
        <button type="submit">Next</button>
      </form>
    );
  };

  getSuccessCard = () => {
    return (
      <div>
        <h1>Step 5</h1>
        <p>Success!</p>
        <button onClick={this.onPreviousBtn4}>Prev</button>
      </div>
    );
  };

  onPrevBtn1 = () => {
    this.setState({ step: 1 });
  };

  onPrevBtn2 = () => {
    this.setState({ step: 2 });
  };

  onPrevBtn3 = () => {
    this.setState({ step: 3 });
  };

  onPreviousBtn4 = () => {
    console.log("4");
    this.setState({ step: 4 });
  };

  render() {
    return (
      <div className="home-container">
        {this.state.step === 1 && this.getForm1()}
        {this.state.step === 2 && this.getForm2()}
        {this.state.step === 3 && this.getForm3()}
        {this.state.step === 4 && this.getForm4()}
        {this.state.step === 5 && this.getSuccessCard()}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUserToStore: (user) => dispatch({ type: "adduser", payload: user }),
  };
};

const connectHome = connect(null, mapDispatchToProps)(Home);

export default connectHome;
