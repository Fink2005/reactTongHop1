import React, { Component } from "react";

export default class Kid extends Component {
  // this.props : object dùng để nhận  data được truyền từ bên ngoài vào component
  render() {
    console.log("props", this.props);
    return (
      <div className="bg-warning">
        Kid
        <h1>{this.props.dataUsername}</h1>
        <h2>Age : {this.props.age}</h2>
        <button
          onMouseOver={this.props.handleClick}
          className="btn btn-primary"
        >
          Click
        </button>
      </div>
    );
  }
}
