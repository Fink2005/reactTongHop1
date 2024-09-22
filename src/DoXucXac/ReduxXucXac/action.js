import { TAI, XIU, PLAY } from "./constantDice";
export const Chan = (payload) => ({
  type: TAI,
  payload,
});

export const Le = (payload) => ({
  type: XIU,
  payload,
});

export const Random = (payload) => ({
  type: PLAY,
  payload,
});
