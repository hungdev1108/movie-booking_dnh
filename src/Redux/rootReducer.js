import { combineReducers } from "redux";
import { SeatReducer } from "./SeatReducer";

export const rootReducer = combineReducers({
  // Nơi sẽ chứa các store theo từng nghiệp vụ
  SeatReducer: SeatReducer,
});
