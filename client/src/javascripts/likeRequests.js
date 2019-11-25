import { api } from '../api.js'

async function addLike(postId) {
  fetch(`${api.url}/addLike`,
    {
      method: 'POST',
      body: JSON.stringify({
        postId,
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

async function deleteLike(postId) {
    fetch(`${api.url}/deleteLike`,
      {
        method: 'DELETE',
        body: JSON.stringify({
          postId,
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

export {
  addLike,
  deleteLike,
}
