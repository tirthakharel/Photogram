import { api } from './api.js'
import axios from 'axios'

async function addComment(postId, text) {
  axios.post(`${api}/comment/${postId}`, {
    postId,
    text
  })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    // TODO: Handle the response.
  });
}

async function editComment(postId, commentId, text) {
  axios.post(`${api}/comment/${postId}/${commentId}`, {
    text
  })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    // TODO: Handle the response.
  });
}

async function deleteComment(postId, commentId, text) {
  axios.delete(`${api}/comment/${postId}/${commentId}`, {
    text
  })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    // TODO: Handle the response.
  });
}
