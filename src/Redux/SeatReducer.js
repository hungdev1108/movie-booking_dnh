const initialState = {
  seatList: [],
};

const SeatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_DATA": {
      const cloneData = [...action.payload];

      return { ...state, seatList: action.payload };
    }
    default:
      return state;
  }
};

export default SeatReducer;
