import React, { Component } from "react";
import { connect } from "react-redux";
import { anPlay, raBao, raBua, raKeo } from "./reduxOanTuTi/actionOanTuTi";
import "./buble.css";
class MainOanTuTi extends Component {
  changeSpeach = () => {
    let { game } = this.props;
    return game === "Iron man: I AM IRON MAN" ? (
      <h1 className="text-danger py-3 fs-1 text-center">{game}</h1>
    ) : (
      <h1 className="text-info py-3 fs-1 text-center">{game}</h1>
    );
  };
  warningHpOfThanos = () => {
    let { thanosHp } = this.props;
    return thanosHp <= 30 ? (
      <h1 className="text-danger ms-2">{thanosHp}</h1>
    ) : (
      <h1 className="text-success ms-2">{thanosHp}</h1>
    );
  };
  warningHpOfIronMan = () => {
    let { ironManHp } = this.props;
    return ironManHp <= 30 ? (
      <h1 className="text-danger ms-2">{ironManHp}</h1>
    ) : (
      <h1 className="text-success ms-2">{ironManHp}</h1>
    );
  };
  render() {
    return (
      <div id="gameOanTuTi">
        <div id="hpIronMan" className="d-flex">
          <h1 className="text-danger">HP:</h1>
          <h1 className="text-success ms-2">{this.warningHpOfIronMan()}</h1>
        </div>
        <h1 className="mt-5 text-center text-success ">Oan tu ti game</h1>
        <div className="container d-flex justify-content-between">
          <div className="player">
            <div className="ironMan ">
              <div
                id="ironManThought"
                className=" d-flex justify-content-center "
              >
                <img
                  className=" border border-3 border-danger"
                  src={this.props.ironManThought}
                  width={150}
                  alt=""
                />
              </div>
              <div className="speech-bubble"></div>
              <img src="./img/imgOanTuTi/player.png" width={300} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={this.props.clickKeo}
                id="btn1"
                type="button"
                className="btn btn-outline-danger"
              >
                <img src="./img/imgOanTuTi/keo.png" width={50} alt="" />
              </button>
              <button
                onClick={this.props.clickBua}
                id="btn1"
                className="btn btn-outline-danger mx-2"
              >
                <img src="./img/imgOanTuTi/bua.png" width={50} alt="" />
              </button>
              <button
                onClick={this.props.clickBao}
                id="btn1"
                className="btn btn-outline-danger"
              >
                <img src="./img/imgOanTuTi/bao.png" width={50} alt="" />
              </button>
            </div>
          </div>

          <div className="info d-flex flex-column justify-content-center">
            <h1 className="text-danger py-3 fs-1 text-center">
              {this.changeSpeach()}
            </h1>
            <div className="d-flex justify-content-center">
              <h2 className="text-info">Số bàn thắng:</h2>
              <h2 className="ms-2 text-danger">{this.props.goals}</h2>
            </div>
            <div className="py-3 d-flex justify-content-center">
              <h2 className="text-info">Số bàn chơi:</h2>
              <h2 className="ms-2 text-danger">{this.props.total}</h2>
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={this.props.clickPlay}
                className="p-2 bg-info  rounded"
              >
                Play game
              </button>
            </div>
          </div>

          <div className="enemy">
            <div className="thanos">
              <div
                id="ironManThought"
                className=" d-flex justify-content-center "
              >
                <img
                  className=" border border-3 border-info"
                  src={this.props.thanosThought}
                  width={150}
                  alt=""
                />
              </div>
              <div className="speech-bubble"></div>
              <img
                src="./img/imgOanTuTi/playerComputer.png"
                width={300}
                alt=""
              />
              <div className="d-flex justify-content-center">
                <h1 className="text-info">HP: </h1>
                {this.warningHpOfThanos()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    ironManThought: state.ironManThought[0].img,
    thanosThought: state.thanosThought[0].img,
    game: state.game,
    goals: state.goals,
    total: state.total,
    thanosHp: state.thanosHp,
    ironManHp: state.ironManHp,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    clickKeo: (keo) => {
      dispatch(raKeo(keo));
    },
    clickBua: (bua) => {
      dispatch(raBua(bua));
    },
    clickBao: (bao) => {
      dispatch(raBao(bao));
    },
    clickPlay: (play) => {
      dispatch(anPlay(play));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainOanTuTi);
