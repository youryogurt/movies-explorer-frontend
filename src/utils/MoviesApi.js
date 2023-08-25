import { MOVIESAPI_URL } from "./constants";
import { handleResponse } from "./constants";

export const getMovies = () => {
  return fetch(MOVIESAPI_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
}