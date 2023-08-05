// import { handleResponse } from "./constants";
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
    return await this._fetch('profile', 'GET');
  }

  // изменение информации пользователя
  async setUserInfo(data) {
    return await this._fetch('profile', 'PATCH', data);
  }

  // добавление фильма в список сохраненных
  async saveMovie(movieId) {
    return await this._fetch(`saved-movies`, 'POST', movieId);
  }
  
   // удаление фильма из списка сохраненных
  async deleteMovie(movieId) {
    return await this._fetch(`saved-movies`, 'DELETE', movieId);
  }

  async changeSavedMovieStatus(movieId, isSaved) {
    if (isSaved) {
      return await this.saveMovie(movieId);
    }
    return await this.deleteMovie(movieId)
  }
}

const api = new Api(); // надо что-то передать в скобки?

export default api;