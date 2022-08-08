export const addSeat = (value) => {
  return {
    type: "ADD_SEAT",
    payload: value,
  };
};

export const isCheck = (value) => {
  return {
    type: "IS_CHECK",
    payload: value,
  };
};
