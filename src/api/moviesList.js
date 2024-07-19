import axios from "axios";

export const getMoviesList = (page = 1) => {
  let url = `https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`;

  return axios.get(url);
};
