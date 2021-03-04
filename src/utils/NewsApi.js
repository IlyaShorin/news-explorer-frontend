var date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const dwb = String(date.getDate() - 7).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = date.getFullYear();

const today = yyyy + '-' + mm + '-' + dd;
const weekBefore = yyyy + '-' + mm + '-' + dwb;

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  findNews(theme) {
    return fetch(
      `${this._baseUrl}q=${theme}&from=${weekBefore}&to=${today}&language=ru&pageSize=100&apiKey=6fe3b7eec28b4562a66b405d6e5f6bce`
    ).then((res) => res.json());
  }
}
const newsApi = new Api({
  baseUrl: 'https://nomoreparties.co/news/v2/everything?',
});
export default newsApi;
