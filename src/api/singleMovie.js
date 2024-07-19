import axios from "axios";

export const getMovie = (id = 1) => {
  let url = `https://moviesapi.codingfront.dev/api/v1/movies/${id}`;

  return axios.get(url);
};
