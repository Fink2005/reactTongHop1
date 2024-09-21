import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
    let { shoeArr } = this.props;
    return (
      <div className="row col-5">
        {shoeArr.map((item, index) => {
          return <ItemShoe key={index} data={item} />;
        })}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    shoeArr: state.listShoe,
  };
};
export default connect(mapStateToProps)(ListShoe);
