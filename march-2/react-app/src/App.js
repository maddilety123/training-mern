import "./App.css";
import { connect } from "react-redux";
import { Component } from "react";
import getMsgMiddleware from "./reduxComponents/actions/getMsgMiddleware";
import getAuthorsMiddleware from "./reduxComponents/actions/getAuthorsMiddleware";
import getUserMiddleware from "./reduxComponents/actions/getUserMiddleware";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  onClickMsgBtn = () => {
    this.props.getMsgLocal();
  };

  onClickAuthorsBtn = () => {
    this.props.getAuthorsListLocal();
  };

  onClickUserBtn = () => {
    this.props.getUserLocal(3);
  };

  render() {
    return (
      <div className="app-container">
        <div className="each-card">
          <button
            onClick={this.onClickMsgBtn}
            className="btn btn-primary button"
          >
            getMessage
          </button>
          <p>{this.props.msg}</p>
        </div>
        <div className="each-card">
          <button
            onClick={this.onClickAuthorsBtn}
            className="btn btn-primary button"
          >
            getAuthors
          </button>
          {this.props.authorsList.length !== 0 && (
            <ul>
              {this.props.authorsList.map((eachauthor) => (
                <li key={eachauthor.id}>{eachauthor.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="each-card">
          <button
            onClick={this.onClickUserBtn}
            className="btn btn-primary button"
          >
            getuUser
          </button>
          {this.props.user !== undefined && (
            <div>
              <p>{this.props.user.id}</p>
              <p>{this.props.user.name}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    msg: state.msg,
    authorsList: state.authorsList,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMsgLocal: () => dispatch(getMsgMiddleware()),
    getUserLocal: (id) => dispatch(getUserMiddleware(id)),
    getAuthorsListLocal: () => dispatch(getAuthorsMiddleware()),
  };
};

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectApp;
