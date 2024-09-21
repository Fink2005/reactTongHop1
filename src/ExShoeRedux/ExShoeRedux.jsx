import React, { Component } from "react";
import ListShoe from "./ListShoe";
import Cart from "./Cart";
export default class ExShoeRedux extends Component {
  render() {
    return (
      <div className="row align-items-start">
        <ListShoe />
        <Cart />
      </div>
    );
  }
}
// action creator
