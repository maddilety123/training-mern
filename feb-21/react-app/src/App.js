import "./App.css";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { connect } from "react-redux";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { seachInput: "" };
  }

  onInputChange = (event) => {
    this.setState({ seachInput: event.target.value });
  };
  onItemClick = (item) => {
    this.props.itemClickAction(item);
  };

  onDelete = (event) => {
    this.props.deleteAction();
  };

  onBasketItemClick = (id) => {
    this.props.basketItemClickAction(id);
  };
  onAllClick = () => {
    this.props.allClick();
  };
  onPendingClick = () => {
    this.props.pendingClick();
  };
  onPurchaseClick = () => {
    this.props.purchasedClick();
  };

  render() {
    const filteredGroceryList = this.props.groceryList.filter((eachGrocery) =>
      eachGrocery.name.includes(this.state.seachInput)
    );
    let modifiedBasketList = [];
    if (this.props.pending) {
      modifiedBasketList = this.props.basketList.filter(
        (eachItem) => eachItem.isChecked === false
      );
    } else if (this.props.purchased) {
      modifiedBasketList = this.props.basketList.filter(
        (eachItem) => eachItem.isChecked === true
      );
    } else {
      modifiedBasketList = this.props.basketList;
    }
    return (
      <div className="app-container">
        <nav className="nav-container">
          <div className="nav-card">
            <div className="basket-container">
              <BsFillBasket2Fill
                size={130}
                height={100}
                color="#ffffff"
                className="pl-2"
              />
            </div>
            <h1 className="main-heading">Hello,Basket!</h1>
          </div>
        </nav>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search grocery item"
            onChange={this.onInputChange}
          />
        </div>
        <div className="grocery-basket-container">
          <div className="grocery-container">
            <div className="leaf-grocery-card">
              <FaLeaf className="leaf-icon" />
              <h1 className="grocery-heading">Groceries</h1>
            </div>
            <ul className="grocery-items-card ">
              {!this.props.purchased &&
                filteredGroceryList.map((eachGrocery) => (
                  <div className="Parent">
                    <li
                      key={eachGrocery.id}
                      className="grocery-item "
                      onClick={() => {
                        this.onItemClick(eachGrocery);
                      }}
                    >
                      <div className="plus-icon-container ">
                        <BsPlusSquare
                          size={15}
                          color="#ffffff"
                          className="plus-icon Show"
                        />
                      </div>
                      <p className="grocery-name ">{eachGrocery.name}</p>
                    </li>
                  </div>
                ))}
            </ul>
          </div>
          <div className="basket-container">
            <div className="basket-delete-card">
              <div className="basket-card">
                <BsFillBasket2Fill
                  size={20}
                  height={100}
                  color="black"
                  className="leaf-icon"
                />
                <h1 className="grocery-heading">Basket</h1>
              </div>
              <div onClick={this.onDelete}>
                <BsTrash color="red" />
              </div>
            </div>
            <ul className="basket-items-card">
              {modifiedBasketList.length === 0 ? (
                <li className="grocery-item">
                  <p>Your basket is empty!</p>
                </li>
              ) : (
                modifiedBasketList.map((eachBasket) => (
                  <li
                    key={eachBasket.id}
                    className="basket-item"
                    onClick={() => {
                      this.onBasketItemClick(eachBasket.id);
                    }}
                  >
                    <p className={eachBasket.isChecked && "checked"}>
                      {eachBasket.number}
                      {eachBasket.name}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <footer className="footer-container">
          <div className="footer-card">
            <p
              className={this.props.all ? "footer-links" : "underline"}
              onClick={this.onAllClick}
            >
              All,
            </p>
            <p
              className={this.props.pending ? "footer-links" : "underline"}
              onClick={this.onPendingClick}
              footer-links
            >
              Pending,
            </p>
            <p
              className={this.props.purchased ? "footer-links" : "underline"}
              onClick={this.onPurchaseClick}
            >
              Purchased,
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceryList,
    basketList: state.basketList,
    all: state.all,
    pending: state.pending,
    purchased: state.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangeLocal: (input) => dispatch({ type: "inpu", payload: input }),
    itemClickAction: (item) => dispatch({ type: "itemclick", payload: item }),
    deleteAction: () => dispatch({ type: "delete" }),
    basketItemClickAction: (id) =>
      dispatch({ type: "basketitemclick", payload: id }),
    allClick: () => dispatch({ type: "allclick" }),
    pendingClick: () => dispatch({ type: "pendingclick" }),
    purchasedClick: () => dispatch({ type: "purchasedclick" }),
  };
};

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectApp;
