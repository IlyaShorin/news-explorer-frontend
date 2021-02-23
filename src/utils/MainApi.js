class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  userName(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('что-то пошло не так'));
    });
  }
  getSavedNews() {
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => res.json());
  }

  saveNews(obj) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      body: JSON.stringify({
        keyword: obj.theme,
        title: obj.title,
        text: obj.description,
        date: obj.publishedAt,
        source: obj.source.name,
        link: obj.url,
        image: obj.urlToImage,
      }),
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => res.json());
  }
  deleteArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => res.json());
  }

  newRegister(obj) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => console.log(err));
  }
  newLogin(obj) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        password: obj.password,
        email: obj.email,
      }),
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('что-то пошло не так'));
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
