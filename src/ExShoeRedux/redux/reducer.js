import { dataShoe } from "../dataShoe";
import { ADD_SHOE, CHANGE_TOTAL, DELETE_SHOE } from "./contant";
let initialState = {
  cart: [6],
  listShoe: dataShoe,
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOE: {
      let shoe = action.payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === shoe.id);
      if (index !== -1) {
        cloneCart[index].total++;
      } else {
        cloneCart.push({ ...shoe, total: 1 });
      }
      return { ...state, cart: cloneCart };
    }
    case DELETE_SHOE: {
      let idShoe = action.payload;
      let cloneCart = [...state.cart];
      let newCart = cloneCart.filter((shoe) => shoe.id !== idShoe);
      return { ...state, cart: newCart };
    }
    case CHANGE_TOTAL: {
      let { idShoe, option } = action.payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === idShoe);
      cloneCart[index].total += option;
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
