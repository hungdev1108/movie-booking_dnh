const stateSelectSeat = {
  selectSeat: [],
};
const SelectSeatReducer = (state = stateSelectSeat, action) => {
  switch (action.type) {
    case "ADD_SEAT": {
      let cloneSelectSeat = [...state.selectSeat];

      let index = cloneSelectSeat.findIndex((item) => {
        return item.soGhe === action.payload.soGhe;
      });

      if (index !== -1) {
        cloneSelectSeat.splice(index, 1);
      } else {
        cloneSelectSeat.push(action.payload);
      }

      return { ...state, selectSeat: cloneSelectSeat };
    }

    case "PAY": {
      let cloneSelectSeat = [...state.selectSeat];

      cloneSelectSeat = [];

      return { ...state, selectSeat: cloneSelectSeat };
    }

    default:
      return { ...state };
  }
};
export default SelectSeatReducer;
