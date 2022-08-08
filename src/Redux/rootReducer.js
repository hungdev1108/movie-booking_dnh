import { combineReducers } from "redux";
import SelectSeatReducer from "./SelectSeatReducer";
import SeatReducer from "./SeatReducer";

export const rootReducer = combineReducers({
  seatReducer: SeatReducer,
  selectSeatReducer: SelectSeatReducer,
});
