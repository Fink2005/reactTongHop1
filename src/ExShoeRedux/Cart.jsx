import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_TOTAL, DELETE_SHOE } from "./redux/contant";
import { deleteShoeAction } from "./redux/action";

class Cart extends Component {
  //  console.log(this.props);
  renderTable = () => {
    let { dataCart, handleDelete, handleChangeTotal } = this.props;
    return dataCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                handleChangeTotal(item.id, -1);
              }}
              className="btn btn-warning"
            >
              -
            </button>
            <strong className="mx-2">{item.total}</strong>
            <button
              onClick={() => {
                handleChangeTotal(item.id, 1);
              }}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className="btn btn-dark"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-7">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
        {this.props.dataCart.length === 0 && (
          <h3 className="text-center ">No items to display</h3>
        )}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    dataCart: state.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (idShoe) => {
      dispatch(deleteShoeAction(idShoe));
    },
    handleChangeTotal: (idShoe, option) => {
      let action = {
        type: CHANGE_TOTAL,
        payload: { idShoe, option },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
