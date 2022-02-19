import { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import getPostAndAppendToStore from "./reduxComponents/actions/getpost";
import postDelete from "./reduxComponents/actions/postdelete";
import { TailSpin } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.getPostsLocal();
  }

  onShowClick = (post) => {
    this.props.localShow(post);
  };

  onEditClick = (post) => {
    this.props.localEdit(post);
  };

  onDeleteClick = (id) => {
    this.props.onDeleteLocal(id);
  };

  onInputChange = () => {};

  render() {
    return (
      <div className="app-container">
        <input
          type="text"
          value={this.props.searchInput}
          placeholder="search by title"
          onChange={this.onInputChange}
        />
        <div className="bg-card">
          {this.props.isLoading ? (
            <TailSpin color="#00BFFF" height={50} width={50} />
          ) : (
            this.props.postList.length !== 0 && (
              <table className="table">
                <tbody className="table">
                  <th className="table">id</th>
                  <th className="table">title</th>
                  <th className="table">Show</th>
                  <th className="table">Edit</th>
                  <th className="table">Delete</th>
                </tbody>
                {this.props.postList.map((eachpost) => (
                  <tr key={eachpost.id} table className="table">
                    <td className="table">{eachpost.id}</td>
                    <td className="table">{eachpost.title}</td>

                    <td className="table">
                      <Link to="./show">
                        <button onClick={() => this.onShowClick(eachpost)}>
                          Show
                        </button>
                      </Link>
                    </td>
                    <th className="table">
                      <Link to="/edit">
                        <button onClick={() => this.onEditClick(eachpost)}>
                          Edit
                        </button>
                      </Link>
                    </th>
                    <th className="table">
                      <button
                        onClick={() => {
                          this.onDeleteClick(eachpost.id);
                        }}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </table>
            )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postList: state.postList,
    isLoading: state.isLoading,
    searchInput: state.searchInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsLocal: (data) => dispatch(getPostAndAppendToStore(data)),
    onDeleteLocal: (id) => dispatch(postDelete(id)),
    localShow: (post) => dispatch({ type: "show", payload: post }),
    localEdit: (post) => dispatch({ type: "edit", payload: post }),
  };
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectComponent;
