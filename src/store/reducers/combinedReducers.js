import { combineReducers } from "redux";
// import favouriteReducer from "./favourite";
import MoviesReducer from "./reducer";

export default combineReducers({
  movies: MoviesReducer,
});
