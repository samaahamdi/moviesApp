import axios from "axios";
// import axiosInstance from "../../network/config";

export const addToFavourites = function (payload) {
  return {
    type: "ADD_TO_FAVOURITES",
    payload,
  };
};

export const removeFromFavourites = function (payload) {
  return {
    type: "REMOVE_FROM_FAVOURITES",
    payload,
  };
};

export const getMoviesList = (language) => (dispatch) => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular/", {
      params: {
        api_key: "52b2f6a0f563396939cf498e3a2976c4",
        language: language,
      },
    })
    .then((res) => {
      dispatch({
        type: "GET_MOVIES_LIST",
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

// export const removeFromFavourites = function (payload) {
//   return {
//     type: "REMOVE_FROM_FAVOURITES",
//     payload,
//   };
// };
