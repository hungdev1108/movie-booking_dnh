const initialState = {
  seatList: [],
};

const SeatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_DATA": {
      //   const cloneData = [...action.payload];

      return { ...state, seatList: action.payload };
    }
    case "IS_CHECK": {
      const cloneData = [...state.seatList];
      cloneData.forEach((item) => {
        item.danhSachGhe.forEach((seat) => {
          if (seat.soGhe === action.payload.soGhe) {
            seat.daDat = !seat.daDat;
          }
        });
      });

      return { ...state, seatList: cloneData };
    }
    default:
      return state;
  }
};

export default SeatReducer;
