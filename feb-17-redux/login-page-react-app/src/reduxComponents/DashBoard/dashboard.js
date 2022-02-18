import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Component } from "react";
import "./dashboard.css";

class DashBoard extends Component {
  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = async () => {
    const response = await fetch("https://retoolapi.dev/BUCPSc/posts");
    const responseJson = await response.json();

    this.props.onFetchUsers(responseJson);
  };

  render() {
    return (
      <div className="dashboard-container">
        <ul className="user-container">
          {this.props.userList.length !== 0 &&
            this.props.userList.map((eachuser) => (
              <li key={eachuser.id} className="user-card">
                <p>{eachuser.id}</p>
                <p>{eachuser.title}</p>
                <p>{eachuser.body}</p>
              </li>
            ))}
        </ul>
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: (userList) => dispatch({ type: "users", payload: userList }),
  };
};

const ConnectDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);

export default ConnectDashboard;
