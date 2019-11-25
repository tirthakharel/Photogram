import { api } from '../api.js'

async function register(firstName, lastName, email, password, username, image='') {
  fetch(`${api.url}/register`,
    {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        username,
        image,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    return res;
  });
}

async function login(email, password) {
  fetch(`${api.url}/login`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    return res;
  });
}

async function logout() {
  fetch(`${api.url}/logout`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    return res;
  });
}

async function checkAuth() {
  fetch(`${api.url}/isLoggedIn`)
    .catch((err) => {
      // TODO: handle the error.
    })
    .then((res) => {
      return res;
    });
}

export {
  register,
  login,
  logout,
  checkAuth,
}