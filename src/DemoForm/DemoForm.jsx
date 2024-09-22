import React, { Component } from "react";
import axios from "axios";
import { message } from "antd";
export default class DemoForm extends Component {
  state = {
    arr: [],
    username: "abcdfgh",
    password: "123456",
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
  handleShow = () => {
    let { arr } = this.state;
    return arr.map((item, index) => {
      return <h3 key={index}>{item}</h3>;
    });
  };
  handleLogin = () => {
    let payload = {
      taiKhoan: this.state.username,
      matKhau: this.state.password,
    };
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: payload,
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MTkxMDQwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQyMDU4MDAwfQ.aL6UU86iw9qfiazPYi9hHV3FjYthitqZbK5pBfChSiU",
      },
    })
      .then((result) => {
        console.log(result);
        console.log(result.data.content);
        this.setState({
          arr: result.data.content,
        });
        message.success("dang nhap thanh cong");
      })
      .catch((err) => {
        console.log(err);
        message.error("dang nhap that bai");
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
        <button onClick={this.handleLogin}>Login</button>
        <div>{this.handleShow()}</div>
      </div>
    );
  }
}

let user = {
  account: "Alice",
};

// user.account = "Bob";
user["account"] = "Bob";
