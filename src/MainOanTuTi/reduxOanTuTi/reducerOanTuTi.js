import { KEO, BUA, BAO, PLAY } from "./constantOanTuTi";
const initialState = {
  ironManThought: [
    {
      img: "./img/imgOanTuTi/ironMan-ideal.png",
      sign: "gorgeous",
    },
  ],
  thanosThought: [
    {
      img: "./img/imgOanTuTi/img.png",
      sign: "gorgeous",
    },
  ],
  game: "FIGHT",
  goals: 0,
  total: 0,
  hp: 100,
};

export let reducerOanTuTi = (state = initialState, { type, payload }) => {
  switch (type) {
    case KEO: {
      let arrThinking = [];
      let newThinking = { img: "./img/imgOanTuTi/keo.png", sign: "keo" };
      arrThinking.push(newThinking);
      state.ironManThought = arrThinking;
      return { ...state };
    }
    case BUA: {
      let arrThinking = [];
      let newThinking = { img: "./img/imgOanTuTi/bua.png", sign: "bua" };
      arrThinking.push(newThinking);
      state.ironManThought = arrThinking;
      return { ...state };
    }
    case BAO: {
      let arrThinking = [];
      let newThinking = { img: "./img/imgOanTuTi/bao.png", sign: "bao" };
      arrThinking.push(newThinking);
      state.ironManThought = arrThinking;
      return { ...state };
    }
    case PLAY: {
      let cloneIronManThinking = [...state.ironManThought];
      let cloneThannosThinking = [...state.thanosThought];
      if (state.ironManThought[0].sign === "gorgeous") {
        alert("You have to choose Iron Man's skills");
      } else {
        for (let i = 0; i < 1; i++) {
          let random = Math.floor(Math.random() * 3) + 1;
          console.log("🚀 ~ reducerOanTuTi ~ random:", random);
          if (random === 1) {
            let keo = "./img/imgOanTuTi/keo.png";
            cloneThannosThinking[0].img = keo;
            if (cloneIronManThinking[0].sign === "bua") {
              state.goals++;
              state.game = "Iron man: I AM IRON MAN";
            } else if (cloneIronManThinking[0].sign === "bao") {
              state.goals--;
              state.game = "Thanos: Perfect Balanced";
            }
          } else if (random === 2) {
            let bua = "./img/imgOanTuTi/bua.png";
            cloneThannosThinking[0].img = bua;
            if (cloneIronManThinking[0].sign === "bao") {
              state.goals++;
              state.game = "Iron man: I AM IRON MAN";
            } else if (cloneIronManThinking[0].sign === "keo") {
              state.goals--;
              state.game = "Thanos: Perfect Balanced";
            }
          } else if (random === 3) {
            let bao = "./img/imgOanTuTi/bao.png";
            cloneThannosThinking[0].img = bao;
            if (cloneIronManThinking[0].sign === "keo") {
              state.goals++;
              state.game = "Iron man: I AM IRON MAN";
            } else if (cloneIronManThinking[0].sign === "bua") {
              state.goals--;
              state.game = "Thanos: Perfect Balanced";
            }
          }
        }
        state.total++;
      }

      return { ...state };
    }
    default:
      return state;
  }
};
