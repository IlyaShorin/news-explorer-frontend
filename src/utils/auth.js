class RegisterApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  newRegister(obj) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      body: JSON.stringify({
        password: obj.password,
        email: obj.email,
        name: obj.name,
      }),
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error("что-то пошло не так"));
    });
  }
  newLogin(obj) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
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
        return Promise.reject(new Error("что-то пошло не так"));
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return data;
        }
      });
  }
}

const auth = new RegisterApi({
  baseUrl: "https://api.news-explorer.students.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});
export default auth;
