import { api } from './api.js'
import axios from 'axios'

async function follow(username) {
  axios.post(`${api}/follow`, {
    username
  })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    // TODO: Handle the response.
  });
}

async function unfollow(username) {
  axios.delete(`${api}/follow`, {
    username
  })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    // TODO: Handle the response.
  });
}
