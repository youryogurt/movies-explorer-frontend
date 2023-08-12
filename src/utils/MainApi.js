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

  async saveMovie(data) {
    return await this._fetch(`movies/${data.movieId}`, 'POST', {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: 'https://api.nomoreparties.co' + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
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