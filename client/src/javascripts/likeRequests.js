/* globals fetch */

import { api } from '../api';

async function addLike(postId) {
  return fetch(`${api.url}/addLike`,
    {
      method: 'POST',
      body: JSON.stringify({
        postId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

async function deleteLike(postId) {
  return fetch(`${api.url}/deleteLike`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        postId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

export {
  addLike,
  deleteLike,
};
