import React, { Component } from "react";
import { dataShoe } from "./dataShoe";
import ListShoe from "./ListShoe";
import Cart from "./Cart";

export default class ExShoe extends Component {
  state = {
    cart: [],
    listShoe: dataShoe,
  };
  handleAddToCart = (shoe) => {
    // tìm xem sp đã có trong giỏ hàng chưa
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === shoe.id);
    // findIndex : nếu khoong tìm thấy => trả về -1
    // th1: sp đã có trong giỏ hàng => tăng số lượng => ko push
    if (index !== -1) {
      cloneCart[index].total++;
    } else {
      // th2: sp chưa có trong giỏ hàng => thêm vào giỏ hàng => push
      cloneCart.push({ ...shoe, total: 1 });
      // cloneCart = [...cloneCart, { ...shoe, total: 1 }];
    }
    // update state => render lại
    this.setState({
      cart: cloneCart,
    });
  };
  handleChangeTotal = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);
    // let shoe = cloneCart[index];
    // shoe.total = shoe.total + option;
    // a=a+10
    cloneCart[index].total += option;
    this.setState({
      cart: cloneCart,
    });
  };
  handleDeleteCart = (idShoe) => {
    console.log("🚀 ~ idShoe:", idShoe);
    let { cart } = this.state;
    // xoá item => splice(index,1) / filter
    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    this.setState({
      cart: newCart,
    });
  };
  render() {
    let { listShoe, cart } = this.state;
    return (
      <div className="row align-items-start">
        <ListShoe shoeArr={listShoe} handleClickAdd={this.handleAddToCart} />
        <Cart
          handleChangeTotal={this.handleChangeTotal}
          dataCart={cart}
          handleDelete={this.handleDeleteCart}
        />
      </div>
    );
  }
}
// redux react redux
