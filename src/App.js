import React, { Component } from "react";
import Home from "./Home";
import ImgSrc from "./image.png";
export default class componentName extends Component {
  state = { fullname: "aziz", image: ImgSrc, show: false, count: 0 };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  /*  componentDidMount() {
    alert(`welcome ${this.state.fullname}`);
  }
  componentDidUpdate() {
    alert("your component and i mean by that the state is updated");
  } */
  handleShow = () => {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ count: 0 });
      this.setState({ show: true });
    }
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.handleIncrement}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleDecrement}>decrement</button> */}
        {this.state.show && (
          <div>
            <h1>{this.state.fullname}</h1>
            <img src={this.state.image} />
            <h1>{this.state.count}</h1>

            {/* {this.state.show && <Home />} */}
          </div>
        )}
        <button onClick={this.handleShow}>show</button>
      </div>
    );
  }
}
