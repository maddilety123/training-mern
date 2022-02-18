import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    number1: "",
    number2: "",
  };

  onInputChange = (event) => {
    const name = event.target.name;
    switch (name) {
      case "number1":
        console.log("number1");
        this.props.number1Change(event.target.value);
        break;
      default:
        console.log("number2");
        this.props.number2Change(event.target.value);
        break;
    }
  };

  onAdd = () => {
    this.props.onAdd();
  };

  onSubstract = () => {
    this.props.onSubstract();
  };

  onMultiplication = () => {
    this.props.onMultiplication();
  };

  onDivision = () => {
    this.props.onDivision();
  };

  render() {
    return (
      <div className="app-container">
        <div className="app-card">
          <h1>Caluculator</h1>
          <label>Number1</label>
          <br />
          <input
            className="form-control"
            value={this.props.number1}
            type="number"
            name="number1"
            onChange={this.onInputChange}
          />
          <br />
          <label>Number2</label>
          <br />
          <input
            value={this.props.number2}
            name="number2"
            className="form-control"
            type="number"
            onChange={this.onInputChange}
          />
          <br />
          <input value={this.props.result} readOnly />
          <br />
          <button className="btn btn-primary m-2" onClick={this.onAdd}>
            Add
          </button>
          <button className="btn btn-primary m-2" onClick={this.onSubstract}>
            Substract
          </button>
          <button
            onClick={this.onMultiplication}
            className="btn btn-primary m-2"
          >
            Multiplication
          </button>
          <button onClick={this.onDivision} className="btn btn-primary m-2">
            Division
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number1: state.number1,
    number2: state.number2,
    result: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    number1Change: (number1) => dispatch({ type: "number1", payload: number1 }),
    number2Change: (number2) => dispatch({ type: "number2", payload: number2 }),
    onAdd: () => dispatch({ type: "add" }),
    onSubstract: () => dispatch({ type: "substraction" }),
    onMultiplication: () => dispatch({ type: "multiplication" }),
    onDivision: () => dispatch({ type: "division" }),
  };
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectComponent;
