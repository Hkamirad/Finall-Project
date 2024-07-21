import axios from "axios";

export const getSerachedMovie = (name = "inception") => {
  let url = `https://moviesapi.codingfront.dev/api/v1/movies?q=${name}`;

  return axios.get(url);
};
