import { DECREASE, INCREASE } from "./contants";

let initialState = {
  number: 100,
};

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE: {
      console.log("YES");
      // return về 1 object mới => redux sẽ tự động render lại component
      // return { ...state, number: state.number + 1 };
      state.number++;
      return { ...state };
    }
    case DECREASE: {
      let value = action.payload;
      return { ...state, number: state.number - value };
    }
    default:
      return state;
  }
};
