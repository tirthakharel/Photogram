import { api } from '../api.js'

async function follow(username) {
  fetch(`${api.url}/follow`,
    {
      method: 'POST',
      body: JSON.stringify({
        username
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

async function unfollow(username) {
  fetch(`${api.url}/unfollow`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        username
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
  follow,
  unfollow,
}
