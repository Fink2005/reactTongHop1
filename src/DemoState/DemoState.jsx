import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
    donGia: 500,
    username: "Alice",
  };
  // update state => this.setState({}) => re-render
  handleTangSoLuong = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  handleGiamSoLuong = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>DemoState - {this.state.username}</h3>
        <button
          onClick={() => {
            this.setState({
              username: this.state.username === "Alice" ? "Tomy" : "Alice",
            });
          }}
        >
          Change Alice to Tomy
        </button>
        <br />
        <button onClick={this.handleGiamSoLuong}>-</button>
        <strong>{this.state.soLuong}</strong>
        <button onClick={this.handleTangSoLuong}>+</button>
      </div>
    );
  }
}
