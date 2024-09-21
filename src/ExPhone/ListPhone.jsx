import React, { Component } from "react";
import ItemPhone from "./ItemPhone";

export default class ListPhone extends Component {
  render() {
    return (
      <div className="row">
        {/* phone : 1 phần tử trong array */}
        {this.props.list.map((item, index) => {
          return (
            <ItemPhone
              key={index}
              phone={item}
              handleClick={this.props.handleClickView}
            />
          );
        })}
      </div>
    );
  }
}
