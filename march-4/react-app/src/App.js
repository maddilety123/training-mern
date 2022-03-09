import "./App.css";
import { Component } from "react";

class App extends Component {
  state = { name: "", image: "" };

  getdata = async () => {
    const response = await fetch("http://localhost:9000/", { method: "POST" });
    const responseJson = await response.text();
    console.log(responseJson);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("image", this.state.image);
    form.append("name", this.state.name);
    const re = await fetch("http://localhost:9000/", {
      method: "POST",
      body: form,
    });
    const resjson = await re.text();
    console.log(resjson);
  };

  onInputChange = (e) => {
    const name = e.target.name;
    console.log(e.target.value);
    this.setState({
      [name]: e.target.value,
    });
  };

  onInputChangeImg = (e) => {
    // let myData = e.target.files[0];
    // let reader = new FileReader();
    // if (myData) {
    //   reader.readAsDataURL(myData);

    //   reader.onload = () => {
    //     this.setState({ image: reader.result }, () => {
    //       console.log(" Image is : ", this.state.image);
    //     });
    //   };
    // }
    this.setState({ image: e.target.files[0] });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.onInputChange}
            value={this.state.name}
          />
          <input type="file" name="image" onChange={this.onInputChangeImg} />
          <button type="submit">get</button>
        </form>
      </div>
    );
  }
}

export default App;
