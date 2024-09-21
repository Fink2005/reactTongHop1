import React, { Component } from "react";
import Kid from "./Kid";

export default class DemoProps extends Component {
  state = {
    username: "Alice",
  };
  handleChangeUsername = () => {
    this.setState({
      username: this.state.username == "Alice" ? "Tomyyyyy" : "Alice",
    });
  };
  render() {
    return (
      <div className="bg-danger p-5">
        <h2>DemoProps</h2>
        <Kid
          dataUsername={this.state.username}
          age={20}
          handleClick={this.handleChangeUsername}
        />
      </div>
    );
  }
}
