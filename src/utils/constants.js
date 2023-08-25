export const MOVIESAPI_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAINAPI_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const BASE_URL = 'https://api.movexplorer.yoryogurt.nomoredomains.rocks';


export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const SCREEN_L = 1280;
export const SCREEN_M = 768;
export const SCREEN_S = 480;

export const MOVIES_PER_PAGE_L = 12;
export const MOVIES_PER_PAGE_M = 8;
export const MOVIES_PER_PAGE_S = 5;
