import axios from "axios";
import React, { Component } from "react";

export default class DemoPhim extends Component {
  state = {
    movies: [],
  };
  clickToCreate = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MTkxMDQwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQyMDU4MDAwfQ.aL6UU86iw9qfiazPYi9hHV3FjYthitqZbK5pBfChSiU",
      },
    })
      .then((result) => {
        console.log(result);
        this.setState({
          movies: result.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  showFilm = () => {
    let { movies } = this.state;
    return movies.map((item, index) => {
      return (
        <div className="card col-3" key={index}>
          <h3>{item.tenPhim}</h3>
          <img src={item.hinhAnh} width={100} alt="" />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.clickToCreate} className="btn btn-primary">
            create
          </button>
          <div>
            <div className="row">{this.showFilm()}</div>
          </div>
        </div>
      </div>
    );
  }
}
