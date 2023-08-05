// import { MAINAPI_URL } from "./constants";
// import { handleResponse } from "./constants";
import { BASE_URL } from "./constants";

// регистрация
export const register = (email, password) => {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

// авторизация
export const login = (email, password) => {
  return fetch (`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};