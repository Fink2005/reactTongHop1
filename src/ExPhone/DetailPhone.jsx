import React, { Component } from "react";
import ListPhone from "./ListPhone";
// import data
import { dataPhone } from "./data";

export default class DetailPhone extends Component {
  render() {
    return (
      <h2 className="d-flex">
        <pre>{JSON.stringify(this.props.detailData, null, 2)}</pre>
        <img width={"auto"} src={this.props.detailData.hinhAnh} alt="" />
      </h2>
    );
  }
}
