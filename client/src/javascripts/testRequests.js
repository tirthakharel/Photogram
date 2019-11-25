import { api } from '../api.js'

async function testAPI() {
  fetch(`${api.url}/testAPI`,
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
  testAPI,
}
