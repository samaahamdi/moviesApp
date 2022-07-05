import axios from "axios";

// console.log('ENV FILE VARS', process.env.REACT_APP_BASE_URL)

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "52b2f6a0f563396939cf498e3a2976c4",
  },
});

export default axiosInstance;
