import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});
export type RootState = ReturnType<typeof allReducers>;
export default allReducers;
