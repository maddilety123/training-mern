import { Component } from "react";
import { connect } from "react-redux";
import "./sample.css";
class Sample extends Component {
  render() {
    return (
      <div className="sample-container">
        {this.props.userlist.length === 0 ? (
          <div>
            <p>no user ,to add fill the form</p>
          </div>
        ) : (
          <ul className="user-container">
            {this.props.userlist.map((eachuser, index) => (
              <li key={index} className="user-card">
                <p>firstName:{eachuser.firstName}</p>
                <p>lastName:{eachuser.lastName}</p>
                <p>age:{eachuser.age}</p>
                <p>height:{eachuser.height}</p>
                <p>weight:{eachuser.weight}</p>
                <p>email:{eachuser.email}</p>
                <p>color:{eachuser.color}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userlist: state.userList,
  };
};

const connectSample = connect(mapStateToProps, null)(Sample);
export default connectSample;
