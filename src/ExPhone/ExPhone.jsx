import React, { Component } from "react";
import ListPhone from "./ListPhone";
import DetailPhone from "./DetailPhone";
import { dataPhone } from "./data";

export default class ExPhone extends Component {
  state = {
    detail: dataPhone[0],
  };
  handleChangePhone = (phone) => {
    this.setState({
      detail: phone,
    });
  };
  render() {
    return (
      <div>
        <ListPhone handleClickView={this.handleChangePhone} list={dataPhone} />
        <DetailPhone detailData={this.state.detail} />
      </div>
    );
  }
}