import { api } from '../api.js'

async function addPost(title, description, file) {
  fetch(`${api}/addPost`,
    {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        file,
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

async function editPost(postId, title, description) {
    fetch(`${api}/editPost`,
      {
        method: 'POST',
        body: JSON.stringify({
          postId,
          title,
          description,
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

  async function getPost(postId) {
    fetch(`${api}/getPost/${postId}`,
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
  
  async function deletePost(postId) {
    fetch(`${api}/deletePost`,
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
    addPost,
    editPost,
    getPost,
    deletePost,
  }
