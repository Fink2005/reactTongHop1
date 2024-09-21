import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE } from "./redux/contants";

class DemoReduxMini extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="d-flex">
        <button
          onClick={() => {
            this.props.handleDecrease(10);
          }}
          className="btn btn-dark"
        >
          -
        </button>
        <h2>{this.props.total}</h2>
        <button onClick={this.props.handleIncrease} className="btn btn-dark">
          +
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  // lấy data từ redux về và truyền thành props của component
  return {
    total: state.number,
  };
};
let mapDispatchToProps = (dispatch) => {
  //  tạo ra các function để gửi action lên redux ( gửi data để thay đổi state)
  return {
    handleIncrease: () => {
      let action = { type: INCREASE };
      dispatch(action);
    },
    handleDecrease: (value) => {
      let action = { type: DECREASE, payload: value };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoReduxMini);

// a(1)(2)

// redux thunk
