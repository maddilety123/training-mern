import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { itemsList: [] };
  onclickGetItems = async () => {
    const response = await fetch("http://localhost:9000/items");
    const responseJson = await response.json();
    if (response.ok === true) {
      this.setState({ itemsList: responseJson.productslist });
    }
  };

  onclickPostItems = async () => {
    const newItem = {
      name: "item4",
      price: 500,
    };

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newItem),
    };
    try {
      const response = await fetch("http://localhost:9000/items", options);
      const responseJson = await response.text();
      alert(responseJson);
    } catch (err) {
      alert(err);
    }
  };

  onclickGetItem = async () => {
    const id = prompt("enter id");

    const response = await fetch(`http://localhost:9000/items/${id}`);
    const responseJson = await response.json();
    if (response.ok === true) {
      alert(`id:${responseJson.data.id},name:${responseJson.data.name}`);
    } else {
      alert("no data found with this id");
    }
  };

  onclickEditItem = async () => {
    const id = prompt("enter id");
    const name = prompt("enter name");
    const price = prompt("enter price");

    const newItem = {
      name: name,
      price: parseInt(price),
    };

    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newItem),
    };
    try {
      const response = await fetch(
        `http://localhost:9000/items/${id}`,
        options
      );
      const responseJson = await response.text();
      alert(responseJson);
    } catch (err) {
      alert(err);
    }
  };

  onclickDeleteItem = async () => {
    const id = prompt("enter id");

    let options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const response = await fetch(`http://localhost:9000/items/${id}`, options);

    if (response.ok === true) {
      const responseJson = await response.json();
      alert(responseJson.data);
    } else {
      alert("no data with this id");
    }
  };

  render() {
    return (
      <div className="">
        <div>
          <button onClick={this.onclickGetItems}>Get Items</button>
          {this.state.itemsList.length !== 0 && (
            <ul>
              {this.state.itemsList.map((eachitem) => (
                <li key={eachitem.id}>
                  <p>{eachitem.id}</p>
                  <p>{eachitem.name}</p>
                  <p>{eachitem.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button onClick={this.onclickPostItems}>Post Item</button>
        </div>
        <div>
          <button onClick={this.onclickGetItem}>Get Item</button>
        </div>

        <div>
          <button onClick={this.onclickEditItem}>Edit Item</button>
        </div>

        <div>
          <button onClick={this.onclickDeleteItem}>Delete Item</button>
        </div>
      </div>
    );
  }
}
export default App;
