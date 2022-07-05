const INITIAL_STATE = {
  favourites: [],
  allMovies: [],
};

export default function MoviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      state.favourites.splice(state.favourites.indexOf(action.payload), 1);
      return {
        ...state,
        favourites: [...state.favourites],
      };
    case "GET_MOVIES_LIST":
      return {
        ...state,
        allMovies: action.payload,
      };
    default:
      return state;
  }
}
