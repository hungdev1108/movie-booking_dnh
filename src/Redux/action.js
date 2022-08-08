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

export const pay = (value) => {
  return {
    type: "PAY",
    payload: value,
  };
};

export const upload = (value) => {
  return {
    type: "UPLOAD_DATA",
    payload: value,
  };
};
