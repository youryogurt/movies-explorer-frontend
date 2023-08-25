import { BASE_URL } from "./constants";

// регистрация
export const register = (name, email, password) => {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
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

// проверка токена
export const getContent = (token) => {
  return fetch (`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(res => res ? res : Promise.reject(`Ошибка: ${res.status}`));
};