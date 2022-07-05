const INITIAL_STATE = {
  favourites: [],
};

export default function favouriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      state.favourites.splice(state.favourites.indexOf(action.payload), 1);
      return {
        favourites: [...state.favourites],
      };
    default:
      return state;
  }
}
