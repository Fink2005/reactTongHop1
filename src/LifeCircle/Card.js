import React, { Component, PureComponent } from "react";

export default class Card extends PureComponent {
  componentDidMount() {
    let time = 300;
    this.timmer = setInterval(() => {
      console.log(time--);
    }, 100);
  }
  render() {
    console.log("thẻ con render");
    return (
      <div className="p-5 bg-primary">
        <h2>Thẻ con</h2>
      </div>
    );
  }
  componentWillUnmount() {
    clearInterval(this.timmer);
    console.log("thẻ con unmount");
  }
}
