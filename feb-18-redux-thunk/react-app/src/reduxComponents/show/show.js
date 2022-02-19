import { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store/store";
class Show extends Component {
  render() {
    return (
      <div>
        <p>{store.getState().showObject.title}</p>
        <p>{store.getState().showObject.body}</p>
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    );
  }
}
export default Show;
