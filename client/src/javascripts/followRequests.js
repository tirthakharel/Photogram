/* globals fetch */

import { api } from '../api';

async function follow(username) {
  return fetch(`${api.url}/follow`,
    {
      method: 'POST',
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

async function unfollow(username) {
  return fetch(`${api.url}/unfollow`,
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

export {
  follow,
  unfollow,
};
