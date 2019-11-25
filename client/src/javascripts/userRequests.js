import { api } from '../api.js'

async function getUser(title, description, file) {
  fetch(`${api.url}/getUser`,
    {
      method: 'GET',
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

async function deleteUser(username) {
    fetch(`${api.url}/deleteUser`,
      {
        method: 'DELETE',
        body: JSON.stringify({
          username,
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

  async function getUsers() {
    fetch(`${api.url}/getUsers`,
      {
        method: 'GET',
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
  getUser,
  deleteUser,
  getUsers,
}
