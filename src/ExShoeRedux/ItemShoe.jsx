import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SHOE } from "./redux/contant";
import { addShoeAction } from "./redux/action";

class ItemShoe extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="col-3">
        <img className="w-100" src={data.image} alt="" />
        <button
          onClick={() => {
            this.props.handleAddToCart(data);
          }}
          className="btn btn-danger"
        >
          Add
        </button>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (shoe) => {
      // let action = addShoeAction(shoe);
      // dispatch(action);
      dispatch(addShoeAction(shoe));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
