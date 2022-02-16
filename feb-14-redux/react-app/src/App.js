import { Component } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import store from "./reduxComponents/Store/store";
import {
  actionStore,
  actionproduct,
  actionGroup,
  userDelete,
  productDelete,
  groupDelete,
} from "./reduxComponents/Action/action";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      userlist: [],
      productlist: [],
      grouplist: [],
      formObject: {},
      isForm: false,
      activeForm: "user",
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      img: "",
      productname: "",
      price: "",
      offeramount: "",
      Finalprice: "",
      sellername: "",
      groupname: "",
      groupdetails: "",
      grouptdate: "",
      allowed: "",
      count: 0,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ userlist: store.getState().userlist });

      this.setState({ productlist: store.getState().productslist });
      this.setState({ grouplist: store.getState().grouplist });
    });
  }

  onUserFormUpdate = (event) => {
    event.preventDefault();
    const userDetails = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      password: this.state.password,
      img: this.state.img,
    };

    const userlist = store.getState().userlist;
    const modifiedUserlist = userlist.map((eachuser) => {
      if (eachuser.id === this.state.id) {
        return { ...userDetails, id: eachuser.id };
      }
      return eachuser;
    });
    store.dispatch(userDelete(modifiedUserlist));
    this.setState({ isForm: false });
  };

  onUserUpdate = (id) => {
    this.setState({ activeForm: "user", isForm: true, id: id });
  };

  onProductFormupdate = (event) => {
    event.preventDefault();
    const productDetails = {
      productname: this.state.productname,
      price: this.state.price,
      offeramount: this.state.offeramount,
      Finalprice: this.state.Finalprice,
      sellername: this.state.sellername,
    };

    const productlist = store.getState().productslist;
    const modifiedgrouplist = productlist.map((eachproduct) => {
      if (eachproduct.id === this.state.id) {
        return { ...productDetails, id: eachproduct.id };
      }
      return eachproduct;
    });
    store.dispatch(productDelete(modifiedgrouplist));
    this.setState({ isForm: false });
  };

  onproUpdate = (id) => {
    this.setState({ activeForm: "product", isForm: true, id: id });
  };
  onGroupFormupdate = (event) => {
    event.preventDefault();
    const groupDetails = {
      groupname: this.state.groupname,
      groupdetails: this.state.groupdetails,
      grouptdate: this.state.grouptdate,

      allowed: this.state.allowed,
    };

    const grouplist = store.getState().grouplist;
    const modifiedgrouplist = grouplist.map((eachgroup) => {
      if (eachgroup.id === this.state.id) {
        return { ...groupDetails, id: eachgroup.id };
      }
      return eachgroup;
    });
    store.dispatch(groupDelete(modifiedgrouplist));
    this.setState({ isForm: false });
  };

  ongroUpdate = (id) => {
    this.setState({ activeForm: "group", isForm: true, id: id });
  };

  getForm = () => {
    if (this.state.activeForm === "user") {
      return (
        <form onSubmit={this.onUserFormUpdate}>
          <h1>User DETAILS</h1>
          <label>firstname</label>
          <br />
          <input
            value={this.state.firstname}
            type="text"
            placeholder="Enter firstname"
            onChange={this.onInputChange}
            name="firstname"
          />
          <br />
          <label>lastname</label>
          <br />
          <input
            value={this.state.lastname}
            type="text"
            placeholder="Enter lastname"
            onChange={this.onInputChange}
            name="lastname"
          />
          <br />
          <label>email</label>
          <br />
          <input
            value={this.state.email}
            type="email"
            placeholder="Enter email"
            onChange={this.onInputChange}
            name="email"
          />
          <br />
          <label>phonenumber</label>
          <br />
          <input
            value={this.state.phonenumber}
            type="number"
            placeholder="Enter phonenumber"
            onChange={this.onInputChange}
            name="phonenumber"
          />
          <br />
          <label>password</label>
          <br />
          <input
            value={this.state.password}
            type="password"
            placeholder="Enter password"
            onChange={this.onInputChange}
            name="password"
          />
          <br />
          <label>image</label>
          <br />
          <input
            type="file"
            accept=".jpeg,.png,.jpg"
            placeholder="upload image"
            value={this.state.img}
            onChange={this.onInputChange}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      );
    } else if (this.state.activeForm === "product") {
      return (
        <form onSubmit={this.onProductFormupdate}>
          <h1>Productslist</h1>
          <label>productname</label>
          <br />
          <input
            type="text"
            name="productname"
            value={this.state.productname}
            placeholder="Enter productname"
            onChange={this.onInputChange}
          />
          <br />
          <label>price</label>
          <br />
          <input
            type="number"
            name="price"
            value={this.state.price}
            placeholder="Enter price"
            onChange={this.onInputChange}
          />
          <br />
          <label>offeramount</label>
          <br />
          <input
            type="number"
            name="offeramount"
            value={this.state.offeramount}
            placeholder="Enter offeramount"
            onChange={this.onInputChange}
          />
          <br />
          <label>Finalprice</label>
          <br />
          <input
            type="number"
            name="Finalprice"
            value={this.state.Finalprice}
            placeholder="Enter Finalprice"
            onChange={this.onInputChange}
          />
          <br />
          <label>sellername</label>
          <br />
          <input
            type="text"
            name="sellername"
            value={this.state.sellername}
            placeholder="Enter sellername"
            onChange={this.onInputChange}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      );
    } else if (this.state.activeForm === "group") {
      return (
        <div>
          <form onSubmit={this.onGroupFormupdate}>
            <input
              type="text"
              name="groupname"
              value={this.state.groupname}
              placeholder="Enter groupname"
              onChange={this.onInputChange}
            />
            <br />
            <label>groupdetails</label>
            <br />
            <input
              type="text"
              name="groupdetails"
              value={this.state.groupdetails}
              placeholder="Enter groupdetails"
              onChange={this.onInputChange}
            />
            <br />
            <label>grouptdate</label>
            <br />
            <input
              type="grouptdate"
              name="grouptdate"
              value={this.state.grouptdate}
              placeholder="Enter grouptdate"
              onChange={this.onInputChange}
            />
            <br />
            <label>allowed</label>
            <br />
            <input
              type="number"
              name="allowed"
              value={this.state.allowed}
              placeholder="Enter allowed"
              onChange={this.onInputChange}
            />
            <br />

            <button type="submit">submit</button>
          </form>
        </div>
      );
    }
  };

  onUserDelete = (id) => {
    const userlist = store.getState().userlist;
    const modifiedUserlist = userlist.filter((eachuser) => eachuser.id !== id);
    store.dispatch(userDelete(modifiedUserlist));
  };

  onProductDelete = (id) => {
    const productslist = store.getState().productslist;
    const modifiedproductlist = productslist.filter(
      (eachproduct) => eachproduct.id !== id
    );
    store.dispatch(productDelete(modifiedproductlist));
  };

  onGroupDelete = (id) => {
    const grouplist = store.getState().grouplist;
    const modifiedgrouplist = grouplist.filter(
      (eachGroup) => eachGroup.id !== id
    );
    store.dispatch(groupDelete(modifiedgrouplist));
  };

  onInputChange = (event) => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value,
    });
  };

  onUserSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      id: uuid(),
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      password: this.state.password,
      img: this.state.img,
    };
    store.dispatch(actionStore(userDetails));
  };
  onProductSubmit = (event) => {
    event.preventDefault();
    const productDetails = {
      id: uuid(),
      productname: this.state.productname,
      price: this.state.price,
      offeramount: this.state.offeramount,
      Finalprice: this.state.Finalprice,
      sellername: this.state.sellername,
    };
    store.dispatch(actionproduct(productDetails));
  };

  onGroupSubmit = (event) => {
    event.preventDefault();
    const groupDetails = {
      id: uuid(),
      groupname: this.state.groupname,
      groupdetails: this.state.groupdetails,
      grouptdate: this.state.grouptdate,
      phonenumber: this.state.phonenumber,
      allowed: this.state.allowed,
    };
    store.dispatch(actionGroup(groupDetails));
  };

  render() {
    return (
      <div className="app-container">
        {this.state.isForm ? (
          <div>
            {this.getForm()}
            <form></form>
          </div>
        ) : (
          <div>
            <div className="form-container">
              <form onSubmit={this.onUserSubmit}>
                <h1>User DETAILS</h1>
                <label>firstname</label>
                <br />
                <input
                  value={this.state.firstname}
                  type="text"
                  placeholder="Enter firstname"
                  onChange={this.onInputChange}
                  name="firstname"
                />
                <br />
                <label>lastname</label>
                <br />
                <input
                  value={this.state.lastname}
                  type="text"
                  placeholder="Enter lastname"
                  onChange={this.onInputChange}
                  name="lastname"
                />
                <br />
                <label>email</label>
                <br />
                <input
                  value={this.state.email}
                  type="email"
                  placeholder="Enter email"
                  onChange={this.onInputChange}
                  name="email"
                />
                <br />
                <label>phonenumber</label>
                <br />
                <input
                  value={this.state.phonenumber}
                  type="number"
                  placeholder="Enter phonenumber"
                  onChange={this.onInputChange}
                  name="phonenumber"
                />
                <br />
                <label>password</label>
                <br />
                <input
                  value={this.state.password}
                  type="password"
                  placeholder="Enter password"
                  onChange={this.onInputChange}
                  name="password"
                />
                <br />
                <label>image</label>
                <br />
                <input
                  type="file"
                  accept=".jpeg,.png,.jpg"
                  placeholder="upload image"
                  value={this.state.img}
                  onChange={this.onInputChange}
                />
                <br />
                <button type="submit">submit</button>
              </form>

              <form onSubmit={this.onProductSubmit}>
                <h1>Productslist</h1>
                <label>productname</label>
                <br />
                <input
                  type="text"
                  name="productname"
                  value={this.state.productname}
                  placeholder="Enter productname"
                  onChange={this.onInputChange}
                />
                <br />
                <label>price</label>
                <br />
                <input
                  type="number"
                  name="price"
                  value={this.state.price}
                  placeholder="Enter price"
                  onChange={this.onInputChange}
                />
                <br />
                <label>offeramount</label>
                <br />
                <input
                  type="number"
                  name="offeramount"
                  value={this.state.offeramount}
                  placeholder="Enter offeramount"
                  onChange={this.onInputChange}
                />
                <br />
                <label>Finalprice</label>
                <br />
                <input
                  type="number"
                  name="Finalprice"
                  value={this.state.Finalprice}
                  placeholder="Enter Finalprice"
                  onChange={this.onInputChange}
                />
                <br />
                <label>sellername</label>
                <br />
                <input
                  type="text"
                  name="sellername"
                  value={this.state.sellername}
                  placeholder="Enter sellername"
                  onChange={this.onInputChange}
                />
                <br />
                <button type="submit">submit</button>
              </form>

              <form onSubmit={this.onGroupSubmit}>
                <h1>Groupslist</h1>
                <label>groupname</label>
                <br />
                <input
                  value={this.state.groupname}
                  type="text"
                  name="groupname"
                  placeholder="Enter groupname"
                  onChange={this.onInputChange}
                />
                <br />
                <label>groupdetails</label>
                <br />
                <input
                  value={this.state.groupdetails}
                  type="text"
                  name="groupdetails"
                  placeholder="Enter groupdetails"
                  onChange={this.onInputChange}
                />
                <br />
                <label>grouptdate</label>
                <br />
                <input
                  value={this.state.grouptdate}
                  type="grouptdate"
                  name="grouptdate"
                  placeholder="Enter grouptdate"
                  onChange={this.onInputChange}
                />
                <br />
                <label>allowed</label>
                <br />
                <input
                  value={this.state.allowed}
                  type="number"
                  name="allowed"
                  placeholder="Enter allowed"
                  onChange={this.onInputChange}
                />
                <br />

                <button type="submit">submit</button>
              </form>
            </div>
            <div className="tables-container">
              <div>
                <table className="table">
                  <tbody>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>phonenumber</th>
                    <th>password</th>
                    <th>update</th>
                    <th>delete</th>
                  </tbody>

                  {store.getState().userlist.length !== 0 &&
                    store.getState().userlist.map((eachuser) => (
                      <tbody key={eachuser.id}>
                        <td>{eachuser.firstname}</td>
                        <td>{eachuser.lastname}</td>
                        <td>{eachuser.email}</td>
                        <td>{eachuser.phonenumber}</td>
                        <td>{eachuser.password}</td>
                        <td>
                          <button
                            onClick={() => {
                              this.onUserUpdate(eachuser.id);
                            }}
                          >
                            update
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              this.onUserDelete(eachuser.id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tbody>
                    ))}
                </table>
              </div>
              <div>
                <table className="table">
                  <tbody>
                    <th>productname</th>
                    <th>price</th>
                    <th>offeramount</th>
                    <th>Finalprice</th>
                    <th>sellername</th>
                    <th>update</th>
                    <th>delete</th>
                  </tbody>

                  {store.getState().productslist.length !== 0 &&
                    store.getState().productslist.map((eachproduct) => (
                      <tr key={eachproduct.id}>
                        <td>{eachproduct.productname}</td>
                        <td>{eachproduct.price}</td>
                        <td>{eachproduct.offeramount}</td>
                        <td>{eachproduct.Finalprice}</td>
                        <td>{eachproduct.sellername}</td>
                        <td>
                          <button
                            onClick={() => {
                              this.onproUpdate(eachproduct.id);
                            }}
                          >
                            update
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              this.onProductDelete(eachproduct.id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </table>
              </div>
              <div>
                <table className="table">
                  <tbody>
                    <th>Groupname</th>
                    <th>GroupDetails</th>
                    <th>grouptdate</th>
                    <th>allowed</th>
                    <th>update</th>
                    <th>delete</th>
                  </tbody>

                  {store.getState().grouplist.length !== 0 &&
                    store.getState().grouplist.map((eachGroup) => (
                      <tbody key={eachGroup.id}>
                        <td>{eachGroup.groupname}</td>
                        <td>{eachGroup.groupdetails}</td>
                        <td>{eachGroup.grouptdate}</td>
                        <td>{eachGroup.allowed}</td>
                        <td>
                          <button
                            onClick={() => {
                              this.ongroUpdate(eachGroup.id);
                            }}
                          >
                            update
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              this.onGroupDelete(eachGroup.id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
