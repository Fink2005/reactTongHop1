import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
    console.log("🚀[ItemPhone.jsx:6]: this.props: ", this.props);
    let { phone } = this.props;
    return (
      <div className="col-4">
        <img style={{ height: 300 }} src={phone.hinhAnh} alt="" />
        <h3>{phone.tenSP}</h3>
        <button
          onClick={() => {
            this.props.handleClick(phone);
          }}
          className="btn btn-danger"
        >
          View
        </button>
      </div>
    );
  }
}
