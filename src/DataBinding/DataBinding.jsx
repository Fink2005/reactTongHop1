import React, { Component } from "react";

export default class DataBinding extends Component {
  desciption = "Learning DataBinding";
  renderButton = () => {
    return <button>Click me</button>;
  };
  render() {
    let imgSrc =
      "https://salt.tikicdn.com/cache/750x750/ts/product/10/01/7a/d7d57affcfba13e7f75d74d1e858e41e.jpg.webp";
    let title = "Hello CyberSoft";
    // let renderButton = () => {
    //   return <button>Click me</button>;
    // };
    return (
      <div>
        <h2>DataBinding</h2>
        <h3>{title}</h3>
        <h4>{this.desciption}</h4>
        {this.renderButton()}
        <img
          src={imgSrc}
          alt=""
          style={{
            width: "200px",
          }}
        />
      </div>
    );
  }
}
// inline css => truyền object css
