import store from "../store/store";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import editAction from "../actions/edit";
class Edit extends Component {
  state = {
    body: "",
    title: "",
  };

  onEditClick = (event) => {
    console.log("edit click");
    event.preventDefault();
    const editPost = {
      body: this.state.body,
      title: this.state.title,
      id: store.getState().editObject.id,
    };
    this.props.localEdit(editPost);
  };

  onInputChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onEditClick}>
          <label>body</label>
          <br />
          <input
            type="text"
            placeholder="edit body"
            onChange={this.onInputChange}
            name="body"
          />
          <br />
          <label>title</label>
          <br />
          <input
            name="title"
            type="text"
            placeholder="edit title"
            onChange={this.onInputChange}
          />
          <br />
          <Link to="/">
            <button type="submit">edit</button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    localEdit: (data) => dispatch(editAction(data)),
  };
};

export default connect(null, mapDispatchToProps)(Edit);
