import React, { Component } from "react";

export default class EventHandling extends Component {
  handleClick = () => {
    console.log("click");
  };
  handleSayHello = (name) => {
    console.log(`Hello ${name}`);
  };
  username = "Alice";
  handleChangeUsername = () => {
    this.username = "Tomy";
    console.log("🚀 ~ this.username:", this.username);
  };
  render() {
    return (
      <div>
        <h2>EventHandling</h2>
        {/* hàm không có tham số */}
        <button onClick={this.handleClick}>click me</button>
        {/* hàm có tham số => dùng arrow function bọc lại */}
        <button
          onClick={() => {
            this.handleSayHello("Sài Gòn");
          }}
        >
          Say hello
        </button>
        <h2>Binding username</h2>
        <h1>{this.username}</h1>
        <button onClick={this.handleChangeUsername}>Change username</button>
      </div>
    );
  }
}
