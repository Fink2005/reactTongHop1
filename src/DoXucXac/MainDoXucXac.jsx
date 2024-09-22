import React, { Component } from "react";
import { connect } from "react-redux";
import { Chan, Le, Random } from "./ReduxXucXac/action";
class MainDoXucXac extends Component {
  renderDice = () => {
    let { dice } = this.props;

    return dice.map((item, index) => {
      return <img width={100} src={item.diceMini} key={index} alt="" />;
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center">DICE GAME</h1>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => this.props.clickTai(2)}
            className="btn btn-primary"
          >
            <h1>TAI</h1>
          </button>
          <div className="mx-3">{this.renderDice()}</div>
          <button
            onClick={() => this.props.clickXiu(1)}
            className="btn btn-primary"
          >
            <h1>XIU</h1>
          </button>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <h1>YOU CHOOSE:</h1>
            <h1 className="text-success">{this.props.chosen}</h1>
          </div>
          <div className="d-flex justify-content-center">
            <h1>WIN:</h1>
            <h1>{this.props.win}</h1>
          </div>
          <div className="d-flex justify-content-center">
            <h1>Total game:</h1>
            <h1>{this.props.total}</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={this.props.play}
            className="btn btn-info text-center"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dice: state.dice,
    chosen: state.chosen,
    win: state.win,
    total: state.total,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    clickTai: (tai) => {
      dispatch(Chan(tai));
    },
    clickXiu: (xiu) => {
      dispatch(Le(xiu));
    },
    play: (play) => {
      dispatch(Random(play));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDoXucXac);
