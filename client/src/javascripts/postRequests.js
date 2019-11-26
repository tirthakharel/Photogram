/* globals fetch */

import { api } from '../api';

async function addPost(title, description, file) {
  return fetch(`${api.url}/addPost`,
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
    });
}

async function editPost(postId, title, description) {
  return fetch(`${api.url}/editPost`,
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
    });
}

async function getPost(postId) {
  return fetch(`${api.url}/getPost/${postId}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
}

async function deletePost(postId) {
  return fetch(`${api.url}/deletePost`,
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
  addPost,
  editPost,
  getPost,
  deletePost,
};
