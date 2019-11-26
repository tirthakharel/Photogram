/* globals fetch */

import { api } from '../api';

async function register(firstName, lastName, email, password, username, image = '') {
  return fetch(`${api.url}/register`,
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
    });
}

async function login(email, password) {
  return fetch(`${api.url}/login`,
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
    });
}

async function logout() {
  return fetch(`${api.url}/logout`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

async function checkAuth() {
  return fetch(`${api.url}/isLoggedIn`)
    .catch((err) => Promise.reject(err))
    .then((res) => res);
}

export {
  register,
  login,
  logout,
  checkAuth,
};
