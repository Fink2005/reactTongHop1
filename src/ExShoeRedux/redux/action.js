// rxaction

import { ADD_SHOE, DELETE_SHOE } from "./contant";

// action creator
export const addShoeAction = (dataShoe) => {
  let action = {
    type: ADD_SHOE,
    payload: dataShoe,
  };
  return action;
};

export const deleteShoeAction = (idShoe) => ({
  type: DELETE_SHOE,
  payload: idShoe,
});

export const changeTotalAction = () => {};
