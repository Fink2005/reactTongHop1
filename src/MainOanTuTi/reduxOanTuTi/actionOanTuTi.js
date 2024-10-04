import { KEO, BUA, BAO, PLAY } from "./constantOanTuTi";

export const raKeo = (payload) => ({
  type: KEO,
  payload,
});

export const raBua = (payload) => ({
  type: BUA,
  payload,
});

export const raBao = (payload) => ({
  type: BAO,
  payload,
});

export const anPlay = (payload) => ({
  type: PLAY    ,
  payload,
});
