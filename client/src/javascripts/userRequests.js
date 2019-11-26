/* globals fetch */

import { api } from '../api';

async function getUser() {
  return fetch(`${api.url}/getUser`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

async function deleteUser(username) {
  return fetch(`${api.url}/deleteUser`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

async function getUsers() {
  return fetch(`${api.url}/getUsers`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

export {
  getUser,
  deleteUser,
  getUsers,
};
