import React, { Component } from "react";
import axios from "axios";
export default class DemoForm extends Component {
  state = {
    username: "alice@123",
    password: "abc123",
  };
  handleChangeForm = (event) => {
    console.log("event:", event.target);
    let { value, name } = event.target;
    console.log("name:", name);
    // ["key"]=value
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
    let payload = {
      taiKhoan: this.state.username,
      matKahu: this.state.password,
    };
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: payload,
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MTkxMDQwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQyMDU4MDAwfQ.aL6UU86iw9qfiazPYi9hHV3FjYthitqZbK5pBfChSiU",
      },
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChangeForm}
          value={this.state.username}
          type="text"
          // name phải trùng với key trong state
          name="username"
          placeholder="username"
        />
        <input
          onChange={this.handleChangeForm}
          name="password"
          value={this.state.password}
          type="text"
          placeholder="password"
        />
        <button>Login</button>
      </div>
    );
  }
}

let user = {
  account: "Alice",
};

// user.account = "Bob";
user["account"] = "Bob";
