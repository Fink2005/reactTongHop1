import { TAI, XIU, PLAY } from "./constantDice";
const initialState = {
  dice: [
    {
      diceMini: "./img/imgDice/1.png",
      ma: 1,
    },
    {
      diceMini: "./img/imgDice/2.png",
      ma: 2,
    },
    {
      diceMini: "./img/imgDice/3.png",
      ma: 3,
    },
    // {
    //   diceMini: "./img/imgDice/4.png",
    //   ma: 4,
    // },
    // {
    //   diceMini: "./img/imgDice/5.png",
    //   ma: 5,
    // },
    // {
    //   diceMini: "./img/imgDice/6.png",
    //   ma: 6,
    // },
  ],

  chosen: "",
  win: 0,
  total: 0,
};

export let diceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TAI: {
      let taiNe = "TAI";
      console.log(payload);
      let cloneChosen = [...state.chosen];
      cloneChosen = taiNe;

      return { ...state, chosen: cloneChosen };
    }
    case XIU: {
      let xiuNe = "XIU";
      console.log(payload);
      let cloneChosen = [...state.chosen];
      cloneChosen = xiuNe;
      return { ...state, chosen: cloneChosen };
    }
    case PLAY: {
      let cloneDice = [...state.dice];
      let newDice = [];
      if (state.chosen === "") {
        alert('you have to select "TAI" or "XIU" ');
      } else {
        for (let i = 0; i < 3; i++) {
          let random = Math.floor(Math.random() * 6) + 1;
          let randomDice = {
            diceMini: `./img/imgDice/${random}.png`,
            ma: random,
          };
          newDice.push(randomDice);
          console.log(newDice);
        }
        state.dice = newDice;
      }
      let totalWin = newDice.reduce(
        (accumulator, currentValue) => accumulator + currentValue.ma,
        0
      );
      console.log(totalWin);
      if (state.chosen === "TAI") {
        if (totalWin > 10) {
          state.win++;
          state.total++;
        } else {
          state.total++;
        }
      } else if (state.chosen === "XIU") {
        if (totalWin <= 10) {
          state.win++;
          state.total++;
        } else {
          state.total++;
        }
      }

      return { ...state };
    }

    default:
      return state;
  }
};
