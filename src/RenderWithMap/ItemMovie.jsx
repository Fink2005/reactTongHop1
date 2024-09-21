import React, { Component } from "react";

export default class ItemMovie extends Component {
  render() {
    return (
      <div className="col-2">
        <p>{this.props.data.tenPhim}</p>
        <img src={this.props.data.hinhAnh} style={{ width: 200 }} alt="" />
      </div>
    );
  }
}
