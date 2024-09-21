import React, { Component } from "react";
import Card from "./Card";

export default class LifeCycle extends Component {
  state = {
    number: 1,
  };
  componentDidMount() {
    // thường dùng để call api hiển thị danh sách khi user vào trang
    console.log("componentDidMount");
    // chạy 1 lần / sau khi render() chạy
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("state mới", newState);
    console.log("state cũ", this.state);
    // mặc định return true / khi return false thì không chạy lệnh render

    // khi number ==5 thì không cho render
    if (newState.number === 5) {
      return false;
    }
    return true;
  }
  render() {
    console.log("render");
    //  chạy nhiều lần / khi setState
    return (
      <div>
        <button
          className="btn btn-dark"
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        >
          -
        </button>
        <strong>{this.state.number}</strong>
        <button
          className="btn btn-dark"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        {this.state.number < 3 && <Card />}
      </div>
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // chạy 1 lần / trước khi component bị xoá khỏi giao diện
  }
}
