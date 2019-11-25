import { api } from '../api.js'

async function addComment(postId, text) {
  fetch(`${api.url}/addComment`,
    {
      method: 'POST',
      body: JSON.stringify({
        postId,
        text,
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

async function editComment(postId, commentId, text) {
  fetch(`${api.url}/editComment`,
    {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentId,
        text,
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

async function deleteComment(postId, commentId) {
  fetch(`${api.url}/deleteComment`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        postId,
        commentId,
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
  addComment,
  editComment,
  deleteComment,
}
