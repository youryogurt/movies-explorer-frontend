import { BASE_URL } from "./constants";

export class Api {
  constructor(config) {
    this.baseUrl = BASE_URL;
    this.headers = config.headers;
  }

  async handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async _fetch(slug, method, body) {
    const token =  localStorage.getItem('jwt');
    const headers = {
      ...this.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };

    const res = await fetch(`${this.baseUrl}/${slug}`, { 
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    });
    return this.handleResponse(res);
  }
  
  // получение информации о залогиненном пользователе
  async getUserInfo() {
    return await this._fetch('users/me', 'GET');
  }

  // получение сохраненных фильмов
  async getSavedMovies() {
    return await this._fetch('movies', 'GET');
  }

  // изменение информации пользователя
  async setUserInfo(data) {
    return await this._fetch('users/me', 'PATCH', data);
  }

  // добавление фильма в список сохраненных
  // async saveMovie(movieId) {
  //   return await this._fetch(`movies/${movieId}`, 'POST', movieId);
  // }

  async saveMovie(movie) {
    return await this._fetch(`movies`, 'POST', {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    });
  }
  
   // удаление фильма из списка сохраненных
  async deleteMovie(movieId) {
    return await this._fetch(`movies/${movieId}`, 'DELETE', movieId);
  }

  async changeSavedMovieStatus(movieId, isSaved) {
    if (isSaved) {
      return await this.saveMovie(movieId);
    }
    return await this.deleteMovie(movieId)
  }
}

const config = {
  BASE_URL: 'https://api.movexplorer.yoryogurt.nomoredomains.rocks',
};

const api = new Api(config);

export default api;